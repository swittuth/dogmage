import { SearchContainer } from "./components/SearchContainer";
import { InfoContext } from "./infocontext";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { ModalCarousel } from "./components/ModalCarousel";

export const App = () => {
  const [imageArray, setImageArray] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [typing, setTyping] = useState(false);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <InfoContext.Provider
      value={{
        imageArray,
        setImageArray,
        suggestions,
        setSuggestions,
        typing,
        setTyping,
        search,
        setSearch,
        limit,
        setLimit,
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {/* {imageArray.length <= 0 ? <SearchContainer /> : <Carousel />} */}
      <SearchContainer />
      <ModalCarousel />
    </InfoContext.Provider>
  );
};
