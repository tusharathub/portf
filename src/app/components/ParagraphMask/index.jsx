"use client";
import styles from "./Page.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "./useMousePosition";
import PixelTransition from "../../../../bits/PixelTransition/PixelTransition";
import InitialCurve from "../InitialCurve";

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <div className="flex h-screen w-screen">
      <InitialCurve/>
        
      <main
        className={`${styles.main} w-4/6 flex flex-col  justify-center text-zinc-900 bg-zinc-50`}
      >
        <motion.div
          className={`${styles.mask} bg-yellow-50`}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            className="w-4/6 mr-130"
            onMouseEnter={() => {
              setIsHovered(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
            }}
          >
            If it looks good, it’s mine. If it doesn’t, someone changed the file
            after I handed it off.
            <br />- Franz Kafka 1899
          </p>
        </motion.div>

        <div className={`${styles.body} `}>
          <p>
            I am Tushar,
            I'm a selectively skilled <span> web developer</span> with high
            focus on producing top quality & stunning digital episodes.
          </p>
        </div>
      </main>

      <div className="w-2/6 flex items-center justify-center bg-zinc-50 ">
        <div>
          <PixelTransition
            secondContent={
              <img
                src="https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg"
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
                  Woof Woof!
                </p>
              </div>
            }
            gridSize={12}
            pixelColor="#ffffff"
            animationStepDuration={0.4}
            className="custom-pixel-card"
          />
          {/* <h1 className="text-3xl font-semibold text-gray-800">
            Filler/ Pixel transition
          </h1> */}
        </div>
      </div>
    </div>
  );
}
