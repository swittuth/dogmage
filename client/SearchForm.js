import { Button, Box, Input, FormControl, Text } from "@chakra-ui/react";

export const SearchForm = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
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
      <div>{/* to display suggestion */}</div>
    </Box>
  );
};
