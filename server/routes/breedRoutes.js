import Router from "@koa/router";

const breedRoutes = new Router({
  prefix: "/dog/breed",
});

breedRoutes.get("/suggestion/:key", (ctx, next) => {
  console.log(ctx.params);
});

export { breedRoutes };
