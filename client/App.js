import { SearchForm } from "./components/SearchForm";
import { AnimatedLogo } from "./components/AnimatedLogo";
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
