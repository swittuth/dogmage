import { SearchContainer } from "./components/SearchContainer";
import { AnimatedLogo } from "./components/AnimatedLogo";
import { InfoContext } from "./infocontext";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { theme } from "./styling/theme";
import { useState } from "react";
import { Carousel } from "./components/Carousel";

export const App = () => {
  const [imageArray, setImageArray] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [typing, setTyping] = useState(false);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(0);

  return (
    <ChakraProvider theme={theme}>
      <InfoContext.Provider
        value={{
          imageArray,
          setImageArray,
          suggestions,
          setSuggestions,
          typing,
          setTyping,
          search,
          setSearch,
          limit,
          setLimit,
        }}
      >
        {imageArray.length <= 0 ? <SearchContainer /> : <Carousel />}
      </InfoContext.Provider>
    </ChakraProvider>
  );
};
