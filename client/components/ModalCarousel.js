import { Carousel } from "./Carousel";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { InfoContext } from "../infocontext";
import { useContext } from "react";

export const ModalCarousel = () => {
  const { isOpen, onClose } = useContext(InfoContext);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Carousel />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
