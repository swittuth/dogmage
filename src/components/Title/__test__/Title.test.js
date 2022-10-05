import { render, screen } from "@testing-library/react";
import { Title } from "../Title";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../../styling/theme";
import "@testing-library/jest-dom";

it("expects title to render passed down text", () => {
  const container = render(
    <ChakraProvider theme={theme}>
      <Title text="Searching" />
    </ChakraProvider>
  );

  const textEl = screen.getByText("Searching");
  expect(textEl).toBeInTheDocument();
});

it("expects title to have role of heading", () => {
  const container = render(
    <ChakraProvider theme={theme}>
      <Title text="Searching" />
    </ChakraProvider>
  );

  const textEl = screen.getByRole("heading");
  expect(textEl).toBeInTheDocument();
});
