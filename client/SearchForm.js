import { Button, Box, Input, FormControl, Text } from "@chakra-ui/react";
import { update } from "lodash";
import { useState, useEffect } from "react";

export const SearchForm = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [search, setSearch] = useState([]);

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
        <h1>Lots of dogs! 🐕</h1>
        <p>See photos of your favorite dogs</p>
        <FormControl
          sx={{
            width: "50%",
            display: "flex",
            gap: "5px",
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
          />
          <Button variant="outline">Fetch</Button>
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
            return <p>{breed}</p>;
          })}
        </Box>
      </Box>
    </Box>
  );
};
