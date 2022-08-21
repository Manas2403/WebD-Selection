import React from "react";
import "./Home.css";
import data from "../data/data";
import Card from "../Card/Card";
import video from "../assets/vid.mp4";
export default function Home() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <>
      <video
        className="background-video"
        autoPlay
        loop
        muted
        poster="https://cdn.mos.cms.futurecdn.net/xcLR5HMU2kxskdAy3ZVuTf-1200-80.jpg.webp"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="home-container">
        <div className="home-heading">Global Climate Change</div>
        <div className="cards-container">{cards}</div>
      </div>
    </>
  );
}
