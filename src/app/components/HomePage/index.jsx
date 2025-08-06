import { useRef, useState, useEffect } from "react";
import styles from "../HomePage/Home.module.css";
import { motion } from "framer-motion";

const words = ["Frontend", "Backend", "Full-Stack"];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

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
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
  <div className="flex h-screen w-screen">
    {/* Left & Middle Combined in One Column (8/12 or 2/3 width) */}
    <div className="w-8/12 flex flex-col justify-center bg-amber-50 text-black pl-16 relative">
      {/* Animated Title Section */}
      <div
        onMouseMove={manageMouseMove}
        className={`${styles.container} flex flex-col justify-center`}
      >
        <div ref={plane} className={styles.body}>
          <h1 className="text-9xl font-gray-100">I am Tushar N.</h1>
          <h1 className="text-9xl font-gray-100">{words[index]}</h1>
          <h1 className="text-9xl font-red-900">Developer</h1>
        </div>
      </div>

      {/* Paragraph Section with Mask Effect */}
      <main
        className={`${styles.main} flex flex-col justify-center mt-10`}
      >
        <motion.div
          className={styles.mask}
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
          <p
            className="w-4/6 text-gray-900"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            If it looks good, it’s mine. If it doesn’t, someone changed the file
            after I handed it off.
            <br />- Franz Kafka 1899
          </p>
        </motion.div>

        <div className={styles.body}>
          <p>
            I'm a selectively skilled <span>web developer</span> with high
            focus on producing top quality & stunning digital episodes.
          </p>
        </div>
      </main>
    </div>

    {/* Right Side Section (Remaining 4/12 or 1/3) */}
    <div className="w-4/12 flex items-center justify-center bg-amber-50">
      filler
    </div>
  </div>
);

}
