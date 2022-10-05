import { InfoContext } from "../../infocontext";
import { Spinner, Text } from "@chakra-ui/react";
import { useContext } from "react";

export const Suggestions = () => {
  const { typing, setSearch, suggestions, setSuggestions } =
    useContext(InfoContext);

  return (
    <>
      {typing ? (
        <Spinner />
      ) : (
        suggestions.map((breed) => {
          return (
            <Text
              key={`${breed}`}
              onClick={() => {
                setSearch(breed);
                setSuggestions([]);
              }}
              sx={{
                backgroundColor: "#CBD5E0",
                transitionDuration: "0.2s",
                width: "100%",
                cursor: "pointer",
                padding: "3px",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#4A5568",
                },
              }}
            >
              {breed}
            </Text>
          );
        })
      )}
    </>
  );
};
