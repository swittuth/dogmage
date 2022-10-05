import { createContext } from "react";

export const InfoContext = createContext({
  imageArray: [],
  suggestions: [],
  typing: true,
  search: "",
  limit: 1,
});
