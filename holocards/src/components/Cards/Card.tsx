import React, { useState } from "react";
import "./Card.css";

interface CardProps {
  onFrontImage: string;
  onBackImage: string;
  holoStyle: string;
}

const Card = ({ onFrontImage, onBackImage, holoStyle }: CardProps) => {
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleCardMove = (e: any) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;
    const px = Math.abs((offsetX / rect.width) * 100);
    const py = Math.abs((offsetY / rect.height) * 100);
    const ty = ((py - 50) / 2) * -1;
    const tx = ((px - 50) / 1.5) * 0.5;
    setRotation({ x: tx, y: ty });
  };

  const handleCardClick = () => {
    setIsActive(!isActive);
    setIsClicked(true);
  };

  const cardStyle = isActive
    ? {
      transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x + 0}deg) scale(1.05)`,
    }
    : {};

  return (
    <div
      className={`card ${isActive ? "active" : ""} ${isClicked ? "clicked" : ""} ${holoStyle}`}
      style={cardStyle}
      onMouseMove={handleCardMove}
      onTouchMove={handleCardMove}
      onClick={handleCardClick}
    >
      <div className="card-face card-front">
        <img src={onFrontImage} alt="Card Front" className="front-image" />
      </div>
      <div className="card-face card-back">
        <img src={onBackImage} alt="Card Back" className="back-image" />
      </div>
    </div>
  );
};

export default Card;
