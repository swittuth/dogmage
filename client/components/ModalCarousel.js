import { Carousel } from "./Carousel";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  ModalHeader,
} from "@chakra-ui/react";
import { InfoContext } from "../infocontext";
import { useContext } from "react";

export const ModalCarousel = () => {
  const { isOpen, onClose, search } = useContext(InfoContext);

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} motionPreset="scale">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{search}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Carousel />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
