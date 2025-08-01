"use client";
import { useEffect, useState } from "react";

const words = ["Frontend", "Backend", "Full-Stack"];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 500); // 0.5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <span className="text-blue-500 font-bold transition-opacity duration-300">
      {words[index]}
    </span>
  );
}
