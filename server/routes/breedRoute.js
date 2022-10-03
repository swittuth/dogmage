import Router from "@koa/router";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("../models/breeds.json");

const breedRoute = new Router({
  prefix: "/dog/breed/suggestion",
});

breedRoute.get("/:breed/:type", async (ctx, next) => {
  const suggestions = [];
  const { breed, type } = ctx.params;

  for (const dog in data.breed) {
    if (dog.indexOf(breed) === 0) {
      data.breed[dog].forEach((t) => {
        if (t.indexOf(type) === 0) {
          suggestions.push(dog + " " + t);
        }
      });
    }
  }

  ctx.body = {
    status: 200,
    json: {
      data: suggestions,
    },
  };
});

breedRoute.get("/:breed", async (ctx, next) => {
  const suggestions = [];
  const { breed } = ctx.params;

  for (const dog in data.breed) {
    if (dog.indexOf(breed) === 0) {
      suggestions.push(dog);
      data.breed[dog].forEach((t) => {
        suggestions.push(dog + " " + t);
      });
    }
  }

  ctx.body = {
    status: 200,
    json: {
      data: suggestions,
    },
  };
});

export { breedRoute };
