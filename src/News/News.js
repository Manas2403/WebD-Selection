import React from "react";
import "./News.css";
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
} from "@chakra-ui/react";
export default function News(props) {
  return (
    <div className="evidence-card">
      <div
        className="evidence-img"
        style={{ backgroundImage: `url(${props.item.img})` }}
      ></div>
      <div className="evidence-info">
        <div className="evidence-title">
          <h4>
            {props.item.title} {props.item.location}
          </h4>
        </div>
        <div className="evidence-desc">
          <p>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
