import { SearchForm } from "./SearchForm";
import { AnimatedLogo } from "./AnimatedLogo";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styling/theme";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      {/* <AnimatedLogo /> */}
      <SearchForm />
    </ChakraProvider>
  );
};
