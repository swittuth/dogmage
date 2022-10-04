import { render, screen } from "@testing-library/react";
import { SearchContainer } from "../../client/components/SearchContainer";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../client/styling/theme";

it("renders search container", () => {
  render(
    <ChakraProvider theme={theme}>
      <SearchContainer />
    </ChakraProvider>
  );
});
