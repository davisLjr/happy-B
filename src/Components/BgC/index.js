// import React, {ReactNode, useEffect, useState} from "react";
import "./style.css";

// interface BgData {
//   children: ReactNode;
// }

// interface ChangeEvent extends React.ChangeEvent<HTMLSelectElement> {
//   currentTarget: HTMLSelectElement & {
//     value: string;
//   };
// }

// const BgC: React.FC<BgData> = ({children}) => {
//   const [confettiPlayers, setConfettiPlayers] = useState<Animation[]>([]);

//   useEffect(() => {
//     makeItConfetti();
//     onChange("bookmarks");
//   }, []);

//   function makeItConfetti() {
//     const confetti = document.querySelectorAll(".confetti");

//     if (!confetti[0]?.animate) {
//       return false;
//     }

//     const newConfettiPlayers: Animation[] = [];

//     confetti.forEach((candycorn, i) => {
//       candycorn.innerHTML =
//         '<div class="rotate"><div class="askew"></div></div>';
//       const scale = Math.random() * 0.7 + 0.3;

//       const player = candycorn.animate(
//         [
//           {
//             transform: `translate3d(${
//               (i / confetti.length) * 100
//             }vw,-5vh,0) scale(${scale}) rotate(0turn)`,
//             opacity: scale,
//           },
//           {
//             transform: `translate3d(${
//               (i / confetti.length) * 100 + 10
//             }vw,105vh,0) scale(${scale}) rotate(${
//               Math.random() > 0.5 ? "" : "-"
//             }2turn)`,
//             opacity: 1,
//           },
//         ],
//         {
//           duration: Math.random() * 3000 + 4000,
//           iterations: Infinity,
//           delay: -(Math.random() * 7000),
//           easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
//         }
//       );

//       newConfettiPlayers.push(player);
//     });

//     setConfettiPlayers(newConfettiPlayers);
//   }

//   function onChange(value: string) {
//     document.body.setAttribute("data-type", value);
//     confettiPlayers.forEach(
//       (player) => (player.playbackRate = value === "bookmarks" ? 2 : 1)
//     );
//   }

//   return (
//     <>
//       <div className="confetti-land">
//         {Array.from({length: 50}).map((_, i) => (
//           <div key={i} className="confetti"></div>
//         ))}
//       </div>

//       {children}
//     </>
//   );
// };

// export default BgC;

import React, {useEffect} from "react";

const ConfettiCanvas = ({children}) => {
  useEffect(() => {
    const NUM_CONFETTI = 350;
    const COLORS = [
      [85, 71, 106],
      [174, 61, 99],
      [219, 56, 83],
      [244, 92, 68],
      [248, 182, 70],
    ];
    const PI_2 = 2 * Math.PI;
    const canvas = document.getElementById("world");
    const context = canvas.getContext("2d");
    let w = 0;
    let h = 0;

    const resizeWindow = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const range = (a, b) => (b - a) * Math.random() + a;

    const drawCircle = (x, y, r, style) => {
      context.beginPath();
      context.arc(x, y, r, 0, PI_2, false);
      context.fillStyle = style;
      context.fill();
    };

    let xpos = 0.5;

    const handleMouseMove = (e) => {
      xpos = e.pageX / w;
    };

    const Confetti = class Confetti {
      constructor() {
        this.style = COLORS[~~range(0, 5)];
        this.rgb = `rgba(${this.style[0]},${this.style[1]},${this.style[2]}`;
        this.r = ~~range(2, 6);
        this.r2 = 2 * this.r;
        this.replace();
      }

      replace() {
        this.opacity = 0;
        this.dop = 0.03 * range(1, 4);
        this.x = range(-this.r2, w - this.r2);
        this.y = range(-20, h - this.r2);
        this.xmax = w - this.r;
        this.ymax = h - this.r;
        this.vx = range(0, 2) + 8 * xpos - 5;
        this.vy = 0.7 * this.r + range(-1, 1);
      }

      draw() {
        this.x += this.vx;
        this.y += this.vy;
        this.opacity += this.dop;
        if (this.opacity > 1) {
          this.opacity = 1;
          this.dop *= -1;
        }
        if (this.opacity < 0 || this.y > this.ymax) {
          this.replace();
        }
        if (!(0 < this.x && this.x < this.xmax)) {
          this.x = (this.x + this.xmax) % this.xmax;
        }
        drawCircle(~~this.x, ~~this.y, this.r, `${this.rgb},${this.opacity})`);
      }
    };

    const confetti = Array.from({length: NUM_CONFETTI}, () => new Confetti());

    const step = () => {
      requestAnimationFrame(step);
      context.clearRect(0, 0, w, h);
      confetti.forEach((c) => c.draw());
    };

    window.addEventListener("resize", resizeWindow, false);
    window.addEventListener("mousemove", handleMouseMove);

    resizeWindow();
    setTimeout(resizeWindow, 0);
    step();

    return () => {
      window.removeEventListener("resize", resizeWindow, false);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array to run the effect only once

  return <canvas id="world" className="parti">{children}</canvas>;
};

export default ConfettiCanvas;
