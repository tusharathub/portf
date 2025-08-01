"use client";
import { div } from "framer-motion/m";
import { useEffect, useState } from "react";

const words = ["Frontend", "Backend", "Full-Stack"];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);
  
return (
  <div className="flex h-screen w-screen">
    <div className="w-4/6 flex flex-col justify-center pl-16 bg-amber-100">
      <h1 className="text-9xl font-bold text-stone-600">I am Tushar N.</h1>
      <h1 className="text-9xl font-bold text-stone-600">{words[index]}</h1>
      <h1 className="text-9xl font-bold text-stone-600">Developer</h1>
    </div>

    <div className="w-2/6 flex items-center justify-center bg-white border-l-4 border-amber-800">
      <h1 className="text-3xl font-semibold text-gray-800">Filler</h1>
    </div>
  </div>
);


}
