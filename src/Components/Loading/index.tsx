"use client";

import React, {useEffect, useState} from "react";
import "./style.css";

const Loading: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loadingPhrase, setLoadingPhrase] = useState<string | null>(null);
  const [showYears, setShowYears] = useState(false);

  useEffect(() => {
    const phrases = [
      "Programador",
      "Maqueteador",
      "Vámos Vélez",
      "Diseño Web",
      "Desarrollador Angular",
    ];
    const randomIndex = Math.floor(Math.random() * phrases.length);

    setLoadingPhrase(phrases[randomIndex]);

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 28) {
          clearInterval(interval);
          setShowYears(true); // Mostrar la palabra "Años"
          return 28; // Mantener el valor en 28
        }
        return prevProgress + 0.5; // Reducir la velocidad de carga
      });
    }, 60); // Ajustar el intervalo de tiempo

    return () => clearInterval(interval);
  }, []);

  // Función para crear la animación de escritura
  const animateText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="animate-char">
        {char}
      </span>
    ));
  };

  return (
    <div className="loading-page">
      <div className="counter">
        {loadingPhrase && <p className="frasi-loading">{loadingPhrase}</p>}
        {showYears ? (
          <h1>28 {animateText("Años")}</h1>
        ) : (
          <h1>{Math.round(progress)}%</h1>
        )}
        <hr style={{width: `${Math.min(progress, 28) * (100 / 28)}%`}} />
      </div>
    </div>
  );
};

export default Loading;

// import React, {useEffect, useState} from "react";
// import "./style.css";

// const Loading: React.FC = () => {
//   const [progress, setProgress] = useState(0);
//   const [loadingPhrase, setLoadingPhrase] = useState<string | null>(null);
//   const [showYears, setShowYears] = useState(false);

//   useEffect(() => {
//     const phrases = [
//       "Programador",
//       "Maqueteador",
//       "Vámos Vélez",
//       "Diseño Web",
//       "Desarrollador Angular",
//     ];
//     const randomIndex = Math.floor(Math.random() * phrases.length);

//     setLoadingPhrase(phrases[randomIndex]);

//     const interval = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress >= 28) {
//           clearInterval(interval);
//           setShowYears(true); // Mostrar la palabra "Años"
//           return 28; // Mantener el valor en 28
//         }
//         return prevProgress + 0.5; // Reducir la velocidad de carga
//       });
//     }, 70); // Ajustar el intervalo de tiempo

//     return () => clearInterval(interval);
//   }, []);

//   // Función para crear la animación de escritura
//   const animateText = (text: string) => {
//     return text.split("").map((char, index) => (
//       <span key={index} style={{animationDelay: `${index * 0.1}s`}}>
//         {char}
//       </span>
//     ));
//   };

//   return (
//     <div className="loading-page">
//       <div className="counter">
//         {loadingPhrase && <p className="frasi-loading">{loadingPhrase}</p>}
//         {showYears ? (
//           <h1>28 {animateText("Años")}</h1>
//         ) : (
//           <h1>{Math.round(progress)}%</h1>
//         )}
//         <hr style={{width: `${Math.min(progress, 28) * (100 / 28)}%`}} />
//       </div>
//     </div>
//   );
// };

// export default Loading;

// import React, {useEffect, useState} from "react";
// import "./style.css";

// const Loading: React.FC = () => {
//   const [progress, setProgress] = useState(0);
//   const [loadingPhrase, setLoadingPhrase] = useState<string | null>(null);

//   useEffect(() => {
//     const phrases = [
//       "Programador",
//       "MAqueteador",
//       "Vámos Vélez",
//       "Diseño Web",
//       "Desarrollador Angular",
//     ];
//     const randomIndex = Math.floor(Math.random() * phrases.length);

//     setLoadingPhrase(phrases[randomIndex]);

//     const interval = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress >= 28) {
//           clearInterval(interval);
//           return 28; // Mantener el valor en 28%
//         }
//         return prevProgress + 0.5; // Reducir la velocidad de carga
//       });
//     }, 70); // Ajustar el intervalo de tiempo

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="loading-page">
//       <div className="counter">
//         {loadingPhrase && <p className="frasi-loading">{loadingPhrase}</p>}
//         <h1>{Math.round(progress)}%</h1>
//         <hr style={{width: `${Math.min(progress, 28) * (100 / 28)}%`}} />
//       </div>
//     </div>
//   );
// };

// export default Loading;
