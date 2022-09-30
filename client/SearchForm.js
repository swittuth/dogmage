import { Button, Box, Input, FormControl, Text } from "@chakra-ui/react";

export const SearchForm = () => {
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
          <Input type="text" name="breed" placeholder="Enter a dog breed" />
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
          <Text>adsfdsa</Text>
          <Text>asdfsad</Text>
        </Box>
      </Box>
    </Box>
  );
};
