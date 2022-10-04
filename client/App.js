import { SearchForm } from "./components/SearchForm";
import { AnimatedLogo } from "./components/AnimatedLogo";
import { InfoContext } from "./infocontext";
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
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
        <Grid
          templateAreas={`
            "logo"
            "search"
          `}
          templateRows="1fr 2fr"
          templateColumns={"1fr"}
        >
          <GridItem area="logo">
            <AnimatedLogo />
          </GridItem>
          <GridItem area="search">
            {imageArray.length <= 0 ? <SearchForm /> : <Carousel />}
          </GridItem>
        </Grid>
        {/* <Carousel /> */}
      </InfoContext.Provider>
    </ChakraProvider>
  );
};
