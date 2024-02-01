// components/Bg.tsx
import React, {ReactNode, useState} from "react";
import "./style.css";

interface Bgdata {
  children: ReactNode;
}
const Bg: React.FC<Bgdata> = ({children}) => {
  return (
    <div className="hero-section-wrap">
      <div className="box diagnoal-top-to-right"></div>
      <div className="box diagnoal-top-to-left"></div>
      <div className="box diagnoal-bottom-to-right"></div>
      <div className="box diagnoal-bottom-to-left"></div>
      <div className="box center-to-top"></div>
      {children}
    </div>
  );
};

export default Bg;
