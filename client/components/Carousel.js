import { useContext } from "react";
import { InfoContext } from "../infocontext";

export const Carousel = () => {
  const { imageArray } = useContext(InfoContext);

  return imageArray.map((image) => {
    return <img key={image} src={image} />;
  });
};
