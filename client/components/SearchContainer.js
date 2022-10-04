import {
  Button,
  Box,
  Input,
  FormControl,
  Grid,
  Flex,
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
import { Suggestions } from "./Suggestions";

export const SearchContainer = () => {
  const { typing, suggestions, setSearch, setSuggestions } =
    useContext(InfoContext);

  return (
    <Flex
      height="100vh"
      width="100vw"
      flexDirection="column"
      justifyContent={"center"}
      alignItems="center"
      gap="10px"
    >
      <AnimatedLogo drawDuration={0.5} fillDuration={0.5} />
      <SearchForm fillDuration={0.9} appearDuration={0.5} />
    </Flex>
  );
};
