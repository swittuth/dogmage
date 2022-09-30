import { SearchForm } from "./SearchForm";
import { AnimatedLogo } from "./AnimatedLogo";
import { ChakraProvider } from "@chakra-ui/react";

export const App = () => {
  return (
    <ChakraProvider>
      {/* <AnimatedLogo /> */}
      <SearchForm />
    </ChakraProvider>
  );
};
