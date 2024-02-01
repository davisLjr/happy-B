"use client";

import React, {useEffect} from "react";
import "./style.css";

const LetterHappy: React.FC = () => {
  useEffect(() => {
    const letters = document.querySelectorAll(".letter-container span");
    letters.forEach((letter, index) => {
      (letter as HTMLElement).style.animation = `fadeIn 0.5s ease-out ${
        index * 0.8
      }s forwards`;
    });
  }, []);

  return (
    <div id="demo" className="letter-container z-10">
      <span className="letter-c color1">F</span>
      <span className="letter-c color2">E</span>
      <span className="letter-c color3">L</span>
      <span className="letter-c color4">I</span>
      <span className="letter-c color5">Z</span>
      <span className="letter-c color1">&nbsp;</span>
      <span className="letter-c color2">C</span>
      <span className="letter-c color3">U</span>
      <span className="letter-c color4">M</span>
      <span className="letter-c color5">P</span>
      <span className="letter-c color1">L</span>
      <span className="letter-c color2">E</span>
      <span className="letter-c color3">A</span>
      <span className="letter-c color4">Ñ</span>
      <span className="letter-c color5">O</span>
      <span className="letter-c color5">S</span>
    </div>
  );
};

export default LetterHappy;
