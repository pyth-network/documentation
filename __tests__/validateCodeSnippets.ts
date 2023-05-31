import fs from "fs";
import { spawnSync } from "child_process";

const codeSnippetRegex = /```([a-zA-Z]+)[\s\S]*?```/g;

function extractCodeSnippetsFromFile(filePath: string): string[] {
  const fileContent = fs.readFileSync(filePath, "utf8");
  const codeSnippets = fileContent.match(codeSnippetRegex) || [];
  return codeSnippets.map((snippet) => snippet.replace(/```/g, "").trim());
}

function runCodeSnippet(code: string, language: string): boolean {
  let command: string;
  let args: string[];

  if (language === "typescript") {
    command = "ts-node";
    args = ["-e", code];
  } else if (language === "solidity") {
    command = "solc";
    args = ["--standard-json"];
  } else {
    console.log(`Unsupported language: ${language}`);
    return false;
  }

  const result = spawnSync(command, args);
  if (result.status === 0) {
    console.log("Code snippet executed successfully!");
    return true;
  } else {
    console.error("Error executing code snippet:");
    console.error(result.stderr.toString());
    return false;
  }
}

function validateCodeSnippets(directoryPath: string): void {
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
        it(`Snippet ${index + 1} in ${file}`, () => {
          // runCodeSnippet(code, language);
          console.log(language);
          console.log(code);
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
