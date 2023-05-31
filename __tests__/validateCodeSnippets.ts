import fs from "fs";
import { join } from "path";
import { exec } from "child_process";
import { promisify } from "util";

const codeSnippetRegex = /```([a-zA-Z]+)[\s\S]*?```/g;
const codeSnippetsDir = ".code_tests";


const execPromise = promisify(exec);

function extractCodeSnippetsFromFile(filePath: string): string[] {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const codeSnippets = fileContent.match(codeSnippetRegex) || [];
  return codeSnippets.map((snippet) => snippet.replace(/```/g, "").trim());
}

async function runCodeSnippet(
  code: string,
  language: string,
  id: string
): Promise<[boolean, string]> {
  let command: string;

  if (language === "typescript") {
    const tempFilePath = join(codeSnippetsDir, `${id}.ts`);

    fs.writeFileSync(tempFilePath, code, "utf8");
    command = `npx ts-node --skip-project --esm ${tempFilePath}`;
    // skip-project ignores tsconfig.json, which has an isolatedModules setting that make it hard to
    // run random code with -e
  } else if (language === "solidity") {
    // FIXME this is broken

    const tempFilePath = join(codeSnippetsDir, `${id}.sol`);
    fs.writeFileSync(tempFilePath, code, "utf8");
    command = `npx solc --bin ${tempFilePath}`;
  } else {
    return [false, `Unsupported language: ${language}`];
  }

  try {
    const result = await execPromise(command);
    return [true, JSON.stringify(result.stdout)];
  } catch (e: any) {
    return [false, JSON.stringify(e)];
  }
}

function clearCodeSnippetsDir(): void {
  if (fs.existsSync(codeSnippetsDir)) {
    fs.rmSync(codeSnippetsDir, { recursive: true, force: true });
  }
  fs.mkdirSync(codeSnippetsDir);
}

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

        it(`Snippet ${index + 1} (${language}) in ${file}`, async () => {
          const [success, error] = await runCodeSnippet(code, language, id);
          expect(success, error).toBe(true);
        });
      });
    }
  });
}

// Specify the root directory containing the .mdx files
describe("Validate code snippets", () => {
  const rootDirectory = "./";
  validateCodeSnippets(rootDirectory);
});
