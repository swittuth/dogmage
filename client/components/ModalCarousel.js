import { Carousel } from "./Carousel";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";
import { InfoContext } from "../infocontext";
import { useContext } from "react";

export const ModalCarousel = () => {
  const { isOpen, onClose, search } = useContext(InfoContext);

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} motionPreset="scale">
      <ModalOverlay
        bg="#FEEBC8"
        backdropFilter="blur(50px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>{search}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Carousel />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
