"use client";

// components/Card.tsx
import React, {useState} from "react";
import "./style.css";

const Card: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`envelope ${isOpen ? "open" : "new"}`}
      onClick={handleCardClick}
    >
      <div className="front">
        <div className="mail">
          <p>Happy Birthday</p>
          <p>Click me</p>
        </div>
      </div>
      <div className="back">
        <div className="letter">
          <p>Messi: te desea feliz cumple.</p>
          <p>Dibu: pasala lindo rey </p>
          <p>Di Maria: Saludos campeon, disfrutalo.</p>

          <div className="box">
            <div className="cake">
              <div className="candle">
                <div className="fire"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flip left-flip"></div>
        <div className="flip right-flip"></div>
        <div className="flip bottom-flip"></div>
        <div className="flip top-flip"></div>
      </div>
    </div>
  );
};

export default Card;
