"use client";

import React, {useEffect, useState} from "react";
import Hero from "@/Components/Hero";
import Loading from "@/Components/Loading";
import Navbar from "@/Components/Navbar";
import LetterHappy from "@/Components/LetterHappy";
import Bg from "@/Components/Bg";
import BgC from "@/Components/BgC";
import Head from "next/head";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const simulateAsyncOperation = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5500);
    };

    simulateAsyncOperation();
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Agradecimiento a Neitrys Barrera, con su ayuda puedo desarrollar paginas web." />
        <meta property="og:title" content="Neitrys Barrera - Practicas de programación" />
        <meta property="og:description" content="Esto es una practica de desarrollo guiada por Neitrys Barrera." />
      </Head>
      <h1 style={{ opacity: 0, height: '1px' }} >Neitrys Barrera</h1>
      <div className="boxing">
        {isLoading ? (
          <Loading /> // Muestra el componente de carga mientras isLoading sea true
        ) : (
          <div className="content-custom fadeIn-custom">
            <div>
              <div className="flex flex-col justify-between h-full">
                <Bg>
                  <div className="py-8 h-auto mb-8 z-10">
                    <Navbar />
                  </div>
                  <div className="px-4 py-8 h-auto mt-3 z-10" id="quien">
                    <Hero />
                  </div>
                </Bg>

                <div className="p-4 h-auto bdark">
                  <BgC>
                    <h1>particula</h1>
                  </BgC>
                  <h2 className="title-m twhite">
                    Con cariño, el talentoso equipo de Maquetado Jesús, Davis y
                    Victoria, te desea:
                  </h2>
                  <LetterHappy />
                  <h3 className="title-s twhite">
                    Que todos tus sueños se hagan realidad en este nuevo año de
                    vida. ¡Disfruta al máximo!
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
