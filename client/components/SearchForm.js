import {
  Button,
  Box,
  Input,
  FormControl,
  Text,
  Select,
  Spinner,
} from "@chakra-ui/react";
import debounce from "lodash.debounce";
import { useState, useMemo, useContext } from "react";
import { InfoContext } from "../infocontext";

export const SearchForm = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [typing, setTyping] = useState(false);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(0);
  const { imageArray, setImageArray } = useContext(InfoContext);

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
    <Box
      sx={{
        display: "grid",
        width: "100vw",
        height: "100vh",
        gridTemplateAreas: `
          "search-area"
          "suggestion"
        `,
        gridTemplateRows: "5fr 5fr",
        gridTemplateColumns: "1fr",
      }}
    >
      <Box
        sx={{
          gridArea: "search-area",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <FormControl
          sx={{
            width: "70%",
            display: "grid",
            gap: "5px",
            gridTemplateAreas: `
              "search limit fetch"
            `,
            gridTemplateColumns: "7fr 2fr 1fr",
          }}
        >
          <Input
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
        </FormControl>
      </Box>
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
    </Box>
  );
};
