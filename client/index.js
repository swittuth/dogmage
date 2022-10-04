import { createRoot } from "react-dom/client";
import { App } from "./App.js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styling/theme";

const root = createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
