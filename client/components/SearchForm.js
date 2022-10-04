import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { InfoContext } from "../infocontext";
import { useMemo, useContext } from "react";
import debounce from "lodash.debounce";

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
    <form>
      <FormControl
        sx={{
          width: "100%",
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
    </form>
  );
};
