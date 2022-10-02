import Router from "@koa/router";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("../models/breeds.json");

const breedRoutes = new Router({
  prefix: "/dog/breed",
});

breedRoutes.get("/suggestion/:key", async (ctx, next) => {
  const suggestions = [];
  const [breed, typeBreed] = ctx.params.key.split("-");
  console.log(breed, typeBreed);

  for (const dog in data.breed) {
    if (typeof typeBreed === "undefined") {
      if (dog.indexOf(breed) === 0) {
        if (data.breed[dog].length > 0) {
          data.breed[dog].forEach((type) => {
            suggestions.push(dog + " " + type);
          });
        } else {
          suggestions.push(dog);
        }
      }
    } else {
      if (dog.indexOf(breed) === 0) {
        if (data.breed[dog].length > 0) {
          data.breed[dog].forEach((type) => {
            if (type.indexOf(typeBreed) === 0) {
              suggestions.push(dog + " " + type);
            }
          });
        } else {
          suggestions.push(dog);
        }
      }
    }
  }

  ctx.body = {
    status: "200",
    json: {
      data: suggestions,
    },
  };
});

export { breedRoutes };
