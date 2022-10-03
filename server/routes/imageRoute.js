import Router from "@koa/router";
import fetch from "isomorphic-fetch";

const url = "https://dog.ceo/api/breed";
const imageRoute = new Router({
  prefix: "/dog/images",
});

imageRoute.get("/:breed/all", async (ctx, next) => {
  const { breed } = ctx.params;
  const imageList = await fetch(`${url}/${breed}/images`).then((res) =>
    res.json()
  );

  ctx.body = {
    status: 200,
    images: imageList.message,
  };
});

imageRoute.get("/:breed/:limit", async (ctx, next) => {
  const { breed, limit } = ctx.params;
  const imageList = await fetch(`${url}/${breed}/images/random/${limit}`).then(
    (res) => res.json()
  );

  ctx.body = {
    status: 200,
    images: imageList.message,
  };
});

export { imageRoute };
