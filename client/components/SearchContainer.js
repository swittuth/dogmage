import {
  Button,
  Box,
  Input,
  FormControl,
  Grid,
  GridItem,
  Text,
  Select,
  Spinner,
} from "@chakra-ui/react";
import debounce from "lodash.debounce";
import { useState, useMemo, useContext } from "react";
import { InfoContext } from "../infocontext";
import { AnimatedLogo } from "./AnimatedLogo";
import { SearchForm } from "./SearchForm";

export const SearchContainer = () => {
  const { typing, suggestions, setSearch, setSuggestions } =
    useContext(InfoContext);

  return (
    <Grid
      templateAreas={`
        "logo"
        "search-area"
        "suggestion"
      `}
      height="100vh"
      width="100vw"
      templateColumns="1fr"
      templateRows="2fr 3fr 5fr"
    >
      <GridItem gridArea="logo">
        <AnimatedLogo />
      </GridItem>
      <GridItem
        gridArea="search-area"
        sx={{
          gridArea: "search-area",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <SearchForm />
      </GridItem>
      <Box
        sx={{
          width: "100%",
          gridArea: "suggestion",
          display: "flex",
          justifyContent: "center",
          padding: "3px",
        }}
      >
        <Box
          sx={{
            width: "70%",
            height: "50vh",
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
            padding: "2px",
            gap: "5px",
            alignItems: "center",
          }}
        >
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
                    width: "100%",
                    cursor: "pointer",
                    borderRadius: "5px",
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
        </Box>
      </Box>
    </Grid>
  );
};
