import { Button } from "@chakra-ui/react";

export const SearchForm = () => {
  return (
    <>
      <h1>Lots of dogs! 🐕</h1>
      <p>See photos of your favorite dogs</p>
      <form>
        <input type="text" name="breed" placeholder="Enter a dog breed" />
        <Button variant="outline">Fetch</Button>
      </form>
    </>
  );
};
