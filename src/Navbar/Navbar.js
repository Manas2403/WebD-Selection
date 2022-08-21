import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import home from "../assets/home.svg";
import map from "../assets/map.svg";
import {
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalCloseButton,
  ModalContent,
} from "@chakra-ui/react";
import news from "../data/news";
import NewsCard from "../News/News";
export default function Navbar() {
  const cards = news.map((item) => {
    return <NewsCard key={item.id} item={item} />;
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <header className="navbar">
        <div className="home">
          <img src={home} alt="" />
          <p className="hover-underline-animation">Home</p>
        </div>
        <div className="news" onClick={onOpen}>
          <p className="hover-underline-animation">Evidences</p>
        </div>
      </header>
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay>
          <ModalContent className="evidence-modal">
            {cards}
            <ModalCloseButton />
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
}
