import {
  Button,
  Box,
  Input,
  FormControl,
  Text,
  Select,
} from "@chakra-ui/react";
import { update } from "lodash";
import { useState, useEffect } from "react";

export const SearchForm = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [search, setSearch] = useState([]);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    updateSuggestion();
  }, [search]);

  async function updateSuggestion() {
    const data = await fetch(
      "http://localhost:3011/dog/breed/suggestion/" + search
    ).then((res) => res.json());

    if (data.json.data.length === 0) {
      setSuggestions([]);
    } else {
      setSuggestions(data.json.data);
    }
  }

  return (
    <Box
      sx={{
        display: "grid",
        width: "100%",
        height: "100%",
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
          height: "100%",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <FormControl
          sx={{
            width: "50%",
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
              console.log(event.target.value);
              setSearch(event.target.value);
            }}
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
          >
            <option value={1}>1</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value="All">All</option>
          </Select>
          <Button
            variant="outline"
            sx={{
              gridArea: "fetch",
            }}
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
            width: "50%",
          }}
        >
          {suggestions.map((breed) => {
            return <Text>{breed}</Text>;
          })}
        </Box>
      </Box>
    </Box>
  );
};
