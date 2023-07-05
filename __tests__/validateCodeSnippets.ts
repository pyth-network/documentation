import fs from "fs";
import { join } from "path";
import { exec } from "child_process";
import { promisify } from "util";
import { tmpdir } from "os";

const codeSnippetRegex = /```([a-zA-Z]+)[\s\S]*?```/g;
const codeSnippetsDir = ".code_tests";

const execPromise = promisify(exec);

function extractCodeSnippetsFromFile(filePath: string): string[] {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const codeSnippets = fileContent.match(codeSnippetRegex) || [];
  return codeSnippets.map((snippet) => snippet.replace(/```/g, "").trim());
}

// Add an async() function around a typescript code block so that you can use
// await statements in the block without triggering a compiler error.
function wrapTsCodeInAsyncFunction(code: string): string {
  const importStatementsRegex = /^(\s*import\s+.*;\s*)+/gm;
  const importStatementsMatch = code.match(importStatementsRegex);

  if (importStatementsMatch) {
    const importStatements = importStatementsMatch.join("\n");
    const coreLogic = code.replace(importStatementsRegex, "").trim();

    const wrappedCode = `
      ${importStatements}

      (async () => {
        ${coreLogic}
      })();
    `;

    return wrappedCode;
  }

  return code;
}

// Wrap a solidity code snippet in a contract and function so the compiler is happy.
function wrapSolCode(code: string): string {
  const importStatementsRegex = /^(\s*import\s+.*;\s*)+/gm;
  const importStatementsMatch = code.match(importStatementsRegex);

  if (importStatementsMatch) {
    const importStatements = importStatementsMatch.join("\n");
    const coreLogic = code.replace(importStatementsRegex, "").trim();

    const wrappedCode = `
      // SPDX-License-Identifier: UNLICENSED
      pragma solidity ^0.8.20;
      ${importStatements}

      contract ExampleContract {
         function wrapper() public {
           ${coreLogic}
         }
      }
    `;

    return wrappedCode;
  }

  return code;
}

async function runCodeSnippet(
  code: string,
  language: string,
  id: string
): Promise<[boolean, string]> {
  let command: string;

  if (language === "typescript") {
    const tempFilePath = join(codeSnippetsDir, `${id}.ts`);
    fs.writeFileSync(tempFilePath, wrapTsCodeInAsyncFunction(code), "utf8");
    // Note: it's unfortunate that we have to repeat the tsconfig options here, but there doesn't
    // seem to be a way to read the flags in the config file from the command line without getting the entire project.
    command = `npx tsc --target es5 --module esnext  --esModuleInterop --moduleResolution node --skipLibCheck --resolveJsonModule --noEmit ${tempFilePath}`;
  } else if (language === "solidity") {
    const tempFilePath = join(codeSnippetsDir, `${id}.sol`);
    fs.writeFileSync(tempFilePath, wrapSolCode(code), "utf8");
    command = `npx solc --base-path . --include-path node_modules/\\@pythnetwork --output-dir ${tmpdir()} --bin ${tempFilePath}`;
  } else {
    return [false, `Unsupported language: ${language}`];
  }

  try {
    const result = await execPromise(command);
    return [true, JSON.stringify(result.stdout)];
  } catch (e: any) {
    const errorMsg = `Error running command ${e.cmd}\n--stdout--\n${e.stdout}\n\n--stderr--\n${e.stderr}`;
    return [false, errorMsg];
  }
}

// Delete everything in the code snippets directory
function clearCodeSnippetsDir(): void {
  if (fs.existsSync(codeSnippetsDir)) {
    fs.rmSync(codeSnippetsDir, { recursive: true, force: true });
  }
  fs.mkdirSync(codeSnippetsDir);
}

// Finds all .mdx files under directoryPath, looks for code snippets in them, and then
// validates them using the run function above.
function validateCodeSnippets(directoryPath: string): void {
  clearCodeSnippetsDir();

  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    const fullPath = `${directoryPath}/${file}`;
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      validateCodeSnippets(fullPath);
    } else if (stats.isFile() && file.endsWith(".mdx")) {
      const codeSnippets = extractCodeSnippetsFromFile(fullPath);
      codeSnippets.forEach((snippet, index) => {
        const language = snippet.split("\n")[0].trim();
        const code = snippet.slice(language.length).trim();
        const id = `${fullPath
          .replace(new RegExp("^./*"), "")
          .replaceAll("/", "-")
          .replaceAll(".", "-")}-${index + 1}`;

        it(`${file} snippet #${index + 1} (${language})`, async () => {
          const [success, error] = await runCodeSnippet(code, language, id);
          expect(success, error).toBe(true);
        });
      });
    }
  });
}

describe("Validate code snippets", () => {
  // We only validate code snippets in the API reference
  validateCodeSnippets("./pages/evm");
});
