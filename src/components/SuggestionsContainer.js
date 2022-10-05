import { Suggestions } from "./Suggestions/Suggestions";
import { Box } from "@chakra-ui/react";

export const SuggestionsContainer = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        display: "flex",
        borderRadius: "5px",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "0px",
        maxHeight: "200px",
        overflow: "auto",
        width: "100%",
        background: "white",
        zIndex: 1,
      }}
    >
      <Suggestions />
    </Box>
  );
};
