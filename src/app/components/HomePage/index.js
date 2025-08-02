import { useRef, useState, useEffect } from "react";
import styles from "../HomePage/Home.module.css";
import PixelTransition from "../../../../bits/PixelTransition/PixelTransition";

const words = ["Frontend", "Backend", "Full-Stack"];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  const plane = useRef(null);
  const maxRotate = 45;

  const manageMouseMove = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    const perspective = window.innerWidth * 4;
    const rotateX = maxRotate * x - maxRotate / 2;
    const rotateY = (maxRotate * y - maxRotate / 2) * -1;
    plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen w-screen">
      <div onMouseMove={(e) => { manageMouseMove(e);}}className={`${styles.container}  w-4/6 flex flex-col justify-center pl-16 text-gray-900 bg-amber-50`} >
        <div ref={plane} className={styles.body}>
          <Text3d primary={"I'm Tushar N."} secondary={"I'm Tushar N."} />
          <Text3d primary={words[index]} secondary={words[index]} />
          <Text3d primary={"Majdoor"} secondary={"Developer"} />
        </div>
      </div>

      <div className="w-2/6 flex items-center justify-center bg-amber-50 border-l-4 border-amber-800">
        <div>
          <PixelTransition
            secondContent={
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
                alt="default pixel transition content, a cat!"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            }
            firstContent={
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  backgroundColor: "#111",
                }}
              >
                <p
                  style={{
                    fontWeight: 900,
                    fontSize: "3rem",
                    color: "#ffffff",
                  }}
                >
                  Meow!
                </p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
          <h1 className="text-3xl font-semibold text-gray-800">
            Filler/ Pixel transition
          </h1>
        </div>
      </div>
    </div>
  );
}

function Text3d({ primary, secondary }) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.primary}>{primary}</p>
      <p className={styles.secondary}>{secondary}</p>
    </div>
  );
}
