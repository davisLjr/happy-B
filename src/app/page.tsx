"use client";

import React, {useEffect, useState} from "react";
// import HappyB from "@/Components/Happy-B";
import Hero from "@/Components/Hero";
import Loading from "@/Components/Loading";
import Navbar from "@/Components/Navbar";
// import {Button} from "@nextui-org/button";
import LetterHappy from "@/Components/LetterHappy";
// import Card from "@/Components/Card";
import Bg from "@/Components/Bg";
import BgC from "@/Components/BgC";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Simula una operación asíncrona que lleva tiempo
  useEffect(() => {
    // Reemplaza esto con tu lógica de carga real
    const simulateAsyncOperation = () => {
      setTimeout(() => {
        setIsLoading(false); // Después de la operación, establece isLoading en false
      }, 5500); // Ejemplo de duración de la operación (3 segundos)
    };

    simulateAsyncOperation();
  }, []);

  return (
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
                  El equipo de Maquetado Jesus, Davis y Victoria, te deseamos un
                  :
                </h2>
                <LetterHappy />
                <h3 className="title-s twhite">
                  Que puedas lograr todas tus metas propuestas y que cumplas
                  muchos más
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
