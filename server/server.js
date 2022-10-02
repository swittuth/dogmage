import Koa from "koa";
import Router from "@koa/router";
import cors from "@koa/cors";
import fetch from "isomorphic-fetch";
import { breedRoutes } from "./routes/breedRoutes.js";

const app = new Koa();
const port = 3011;

app.use(cors({ origin: "*" }));

app.use(breedRoutes.routes());

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
