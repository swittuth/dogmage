import { Carousel } from "./Carousel";
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Text,
  ModalHeader,
  ModalFooter,
} from "@chakra-ui/react";
import { InfoContext } from "../infocontext";
import { useContext } from "react";
import { startCase } from "lodash";

export const ModalCarousel = () => {
  const { isOpen, onClose, search } = useContext(InfoContext);

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} motionPreset="scale">
      <ModalOverlay
        bg="#FEEBC8"
        backdropFilter="blur(50px) hue-rotate(90deg)"
      />
      <ModalContent>
        <ModalHeader>
          <Text
            bgGradient="linear(to-r, #D69E2E, #DD6B20)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="bold"
          >
            {startCase(search)}
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Carousel />
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};
