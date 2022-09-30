import fetch from "isomorphic-fetch";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const url = "https://dog.ceo/api/breeds/list/all";

async function loadData(url) {
  const dogList = await fetch(url).then((res) => res.json());
  const dataObj = {
    breed: dogList.message,
  };
  const dataString = JSON.stringify(dataObj);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const fileName = path.resolve(__dirname, "./breeds.json");
  fs.writeFile(fileName, dataString, "utf8", () => {
    console.log("success");
  });
}

loadData(url);
