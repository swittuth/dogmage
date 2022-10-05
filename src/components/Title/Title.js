import { Text } from "@chakra-ui/react";

export const Title = ({ fontSize, fontWeight, text }) => {
  return (
    <Text
      bgGradient="linear(to-r, #D69E2E, #DD6B20)"
      role="heading"
      bgClip="text"
      fontSize={
        typeof fontSize === "undefined" || typeof fontSize !== "string"
          ? "2xl"
          : fontSize
      }
      fontWeight={
        typeof fontSize === "undefined" || typeof fontSize !== "string"
          ? "bold"
          : fontSize
      }
    >
      {text}
    </Text>
  );
};
