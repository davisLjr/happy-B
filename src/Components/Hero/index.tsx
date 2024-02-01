"use client";

import {useEffect} from "react";
import {Image} from "@nextui-org/react";
import "./style.css";
import {Tooltip} from "@nextui-org/react";

interface AnimatedElement extends Element {
  getAttribute(attributeName: string): string;
}

const Hero = () => {
  useEffect(() => {
    const animateElements =
      document.querySelectorAll<AnimatedElement>(".has-animation");

    animateElements.forEach((element) => {
      const delay = parseInt(element.getAttribute("data-delay"), 10) || 0;

      setTimeout(() => {
        element.classList.add("animate-in");
      }, delay);
    });
  }, []);

  return (
    <>
      <div className="has-animation animation-ltr text-center" data-delay="10">
        <p className="bigger">Lautaro Rodriguez </p>
      </div>

      <div
        className="has-animation animation-rtl text-center"
        data-delay="1000"
      >
        <p className="bigger">Lautihno.</p>
      </div>

      <br />

      <div
        className="has-animation animation-ltr flex justify-center"
        data-delay="1500"
      >
        <p className="text txt-center">
          Aficionado de Velez, equipo muito grande y mejor do mundihno de
          fúchibol.
        </p>
      </div>

      <br />

      <div
        className="has-animation animation-rtl flex justify-center"
        data-delay="2000"
      >
        <Tooltip
          content="P.D. No puedes devolver la transferencia, ¡porque si no, Vélez desciende!"
          className="tlt"
        >
          <Image
            src="https://velez.com.ar/cdn/grafica/escudo-borde.svg"
            width="50"
            height="60"
            alt="Vélez"
          />
        </Tooltip>
      </div>

      <br />

      {/* <div
        className="has-animation animation-ltr text-center"
        data-delay="4000"
      >
        <p className="bigger">END ☺</p>
      </div> */}
    </>
  );
};

export default Hero;
