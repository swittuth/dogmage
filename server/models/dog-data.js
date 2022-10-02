import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import fetch from "isomorphic-fetch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileName = path.resolve(__dirname, "./breeds.json");
const data = fs.readFile(fileName, "utf8", () => {
  console.log("success");
});

console.log(data);
