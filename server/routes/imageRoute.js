import Router from "@koa/router";

const imageRoute = new Router({
  prefix: "/dog/images",
});

imageRoute.get("/:breed/:limit", async (ctx, next) => {
  const url = "https://dog.ceo/api/breed"; // /breedName + /images/random + /limit
  console.log(ctx.params);
});

export { imageRoute };
