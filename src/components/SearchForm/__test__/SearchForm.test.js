import { render, screen } from "@testing-library/react";
import { SearchForm } from "../SearchForm";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../../styling/theme";
import "@testing-library/jest-dom";

it("renders search form", () => {
  const container = render(
    <ChakraProvider theme={theme}>
      <SearchForm />
    </ChakraProvider>
  );

  const el = screen.getByRole("button");
});
