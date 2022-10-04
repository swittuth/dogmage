import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Select,
  Button,
  VStack,
} from "@chakra-ui/react";
import { InfoContext } from "../infocontext";
import { useMemo, useContext } from "react";
import debounce from "lodash.debounce";
import { Suggestions } from "./Suggestions";
import "../styling/searchForm.css";

export const SearchForm = () => {
  const {
    setSuggestions,
    setTyping,
    setSearch,
    limit,
    setLimit,
    setImageArray,
    search,
  } = useContext(InfoContext);

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
  }

  return (
    <form className="search-form">
      <FormLabel>Search Your Dog</FormLabel>
      <VStack>
        <FormControl>
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
          <Box
            sx={{
              position: "absolute",
              display: "flex",
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
        </FormControl>
        <Select
          placeholder="Limit"
          sx={{
            gridArea: "limit",
          }}
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
        <Button
          variant="outline"
          sx={{
            gridArea: "fetch",
          }}
          onClick={getImages}
        >
          Fetch
        </Button>
      </VStack>
    </form>
  );
};
