import { SearchContainer } from "./components/SearchContainer";
import { AnimatedLogo } from "./components/AnimatedLogo";
import { InfoContext } from "./infocontext";
import {
  ChakraProvider,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import { theme } from "./styling/theme";
import { useState } from "react";
import { Carousel } from "./components/Carousel";
import { ModalCarousel } from "./components/ModalCarousel";

export const App = () => {
  const [imageArray, setImageArray] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [typing, setTyping] = useState(false);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          isOpen,
          onOpen,
          onClose,
        }}
      >
        {/* {imageArray.length <= 0 ? <SearchContainer /> : <Carousel />} */}
        <SearchContainer />
        <ModalCarousel />
      </InfoContext.Provider>
    </ChakraProvider>
  );
};
