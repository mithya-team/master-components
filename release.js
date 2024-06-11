import { exec } from "node:child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

exec("npx tsc");

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PACKAGE_JSON_FILE_PATH = "./package.json";
const PACKAGE_JSON_ABSOLUTE_FILE_PATH = path.join(
  __dirname,
  PACKAGE_JSON_FILE_PATH
);
const packageJsonFileContent = JSON.parse(
  fs.readFileSync(PACKAGE_JSON_ABSOLUTE_FILE_PATH, {
    encoding: "utf8",
  })
);
const TSCONFIG_FILE_PATH = path.join(__dirname, "./tsconfig.json");
const tsConfigJsonFileContent = JSON.parse(
  fs.readFileSync(TSCONFIG_FILE_PATH, {
    encoding: "utf8",
  })
);
const BUILD_DIR = tsConfigJsonFileContent.compilerOptions.outDir;

const version = packageJsonFileContent.version;

exec(
  `tar -czvf master-components@${version}.tar.gz ${BUILD_DIR} ${PACKAGE_JSON_FILE_PATH}`
);
