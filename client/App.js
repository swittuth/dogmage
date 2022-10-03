import { SearchForm } from "./components/SearchForm";
import { AnimatedLogo } from "./components/AnimatedLogo";
import { InfoContext } from "./infocontext";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styling/theme";
import { useState } from "react";
import { Carousel } from "./components/Carousel";

export const App = () => {
  const [imageArray, setImageArray] = useState([]);
  return (
    <ChakraProvider theme={theme}>
      <InfoContext.Provider
        value={{
          imageArray,
          setImageArray,
        }}
      >
        {/* <AnimatedLogo /> */}
        {imageArray.length <= 0 ? <SearchForm /> : <Carousel />}
        {/* <Carousel /> */}
      </InfoContext.Provider>
    </ChakraProvider>
  );
};
