import React from "react";
import "./Card.css";
import upArrow from "../assets/uparrow.svg";
import downArrow from "../assets/downarrow.svg";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Image,
  Text,
  Tooltip,
} from "@chakra-ui/react";
export default function Card(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let arrow;
  if (props.item.bool) arrow = upArrow;
  else arrow = downArrow;
  return (
    <>
      <div className="card">
        <div className="card-info" onClick={onOpen}>
          <div
            className="card-title"
            style={{ color: `${props.item.background}` }}
          >
            {props.item.title}
          </div>
          <div className="card-content">
            <img src={arrow} alt="" />
            <div className="card-content-value">
              {props.item.value}
              <sup
                style={{
                  fontFamily: "Poppins",
                  fontSize: "0.8rem",
                  color: "white",
                }}
              >
                {props.item.sup}
              </sup>
            </div>
          </div>
          <Tooltip label="Click me">
            <div className="more">More Info...</div>
          </Tooltip>
        </div>
      </div>
      <Modal onClose={onClose} size="xl" isOpen={isOpen}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>{props.item.title}</ModalHeader>
            <ModalBody>
              <Box maxW="sm" overflow="hidden">
                <Image src={props.item.img} alt="" objectFit="cover" />
              </Box>
              <Text fontSize="md" color="black">
                {props.item.details}
              </Text>
            </ModalBody>
            <ModalCloseButton />
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
}
