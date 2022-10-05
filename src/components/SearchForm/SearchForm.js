import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Text,
  Select,
  Button,
  VStack,
} from "@chakra-ui/react";
import { InfoContext } from "../../infocontext";
import { useMemo, useContext } from "react";
import debounce from "lodash.debounce";
import "../../styling/searchForm.css";
import { motion } from "framer-motion";
import { Title } from "../Title/Title";
import { SuggestionsContainer } from "../SuggestionsContainer";

export const SearchForm = ({ fillDuration, appearDuration }) => {
  const {
    setSuggestions,
    setTyping,
    setSearch,
    limit,
    setLimit,
    setImageArray,
    search,
    onOpen,
  } = useContext(InfoContext);

  const fillAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: appearDuration,
      ease: "easeInOut",
      delay: fillDuration,
    },
  };

  const inputHandler = (event) => {
    updateSuggestion(event);
  };

  const debouncedHandler = useMemo(() => debounce(inputHandler, 250), []);

  async function updateSuggestion(event) {
    if (event.target.value === "") {
      setSuggestions([]);
    } else {
      const [breed, type] = event.target.value.split(" ");
      const searchValue =
        typeof type === "undefined"
          ? breed.toLowerCase()
          : breed.toLowerCase() + "/" + type.toLowerCase();
      const data = await fetch(
        "http://localhost:3011/dog/breed/suggestion/" + searchValue
      ).then((res) => res.json());
      setSuggestions(data.json.data);
    }
    setTyping(false);
  }

  async function getImages() {
    const url = "http://localhost:3011/dog/images";
    const [breed, subBreed] = search.split(" ");
    let dogImages = null;
    if (typeof subBreed === "undefined") {
      dogImages = await fetch(`${url}/${breed}/${limit}`).then((res) =>
        res.json()
      );
    } else {
      dogImages = await fetch(`${url}/${breed}/${subBreed}/${limit}`).then(
        (res) => res.json()
      );
    }
    setImageArray(dogImages.images);
    onOpen();
  }

  return (
    <motion.form className="search-form" {...fillAnimation}>
      <VStack>
        <FormLabel>
          <Title text="Search A Dog's Image" />
        </FormLabel>
        <FormControl isRequired>
          <Input
            autoComplete="off"
            type="text"
            onChange={(event) => {
              setSearch(event.target.value);
              setTyping(true);
              debouncedHandler(event);
            }}
            value={search}
            name="breed"
            placeholder="Enter a dog breed"
            sx={{
              gridArea: "search",
            }}
          />
          <SuggestionsContainer />
        </FormControl>
        <FormControl isRequired>
          <Select
            value={limit}
            onChange={(event) => {
              setLimit(event.target.value);
            }}
          >
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value="all">All</option>
          </Select>
        </FormControl>
        <Button
          variant="solid"
          bg="#F6AD55"
          color="#FFFAF0"
          onClick={getImages}
          sx={{
            "&:hover": {
              backgroundColor: "#ED8936",
            },
          }}
        >
          Fetch
        </Button>
      </VStack>
    </motion.form>
  );
};
