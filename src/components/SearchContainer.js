import { Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { InfoContext } from "../infocontext";
import { AnimatedLogo } from "./AnimatedLogo/AnimatedLogo";
import { SearchForm } from "./SearchForm/SearchForm";

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
