import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import home from "../assets/home.svg";
import map from "../assets/map.svg";
import location from "../assets/Vector.svg";
import {
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalCloseButton,
  ModalContent,
} from "@chakra-ui/react";
import news from "../data/news";
import NewsCard from "../News/News";
import axios from "axios";
export default function Navbar() {
  const [getAQI, setAQI] = useState();
  const cards = news.map((item) => {
    return <NewsCard key={item.id} item={item} />;
  });
  useEffect(() => {
    const getAirQuality = async () => {
      try {
        const air = await axios.get(
          `https://api.waqi.info/feed/bangalore/?token=c0fa3d4f1bd4f1d66c184dac6c89a9209ec3a0b7`
        );
        setAQI(air.data.data.aqi);
        console.log(getAQI);
      } catch (error) {
        console.log(error);
      }
    };
    getAirQuality();
  }, []);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <header className="navbar">
        <div className="left-container">
          <div className="home">
            {/* <img src={home} alt="" /> */}
            <p className="hover-underline-animation">Home</p>
          </div>
          <div className="news" onClick={onOpen}>
            <p className="hover-underline-animation">Evidences</p>
          </div>
        </div>
        <div className="aqi-container">
          <div className="aqi-city">
            <img src={location} alt="" />
            <p>Bangalore</p>
          </div>
          <div className="aqi-value">AQI:{getAQI}</div>
        </div>
      </header>
      <Modal onClose={onClose} size="xxl" isOpen={isOpen}>
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
