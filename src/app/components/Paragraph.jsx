"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollVelocity from "../../../bits/ScrollVelocity/ScrollVelocity";

gsap.registerPlugin(ScrollTrigger);

export default function Paragraph() {
  useEffect(() => {
    // Ensure this runs after DOM is mounted
    const lines = document.querySelectorAll(".about-line");

    lines.forEach((line) => {
      gsap.fromTo(
        line,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
            end: "top 40%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (

    <div>

    
   <ScrollVelocity
  texts={['Keep Scrolling ', 'Hover over items']} 
  velocity={100} 
  className="custom-scroll-text"
/>
    <div className="flex h-screen w-screen">

      <section className="min-h-screen w-4/6 flex items-center justify-cente px-6 py-20 bg-lime-200 text-black">
      
        <div className="max-w-3xl text-xl sm:text-2xl leading-relaxed font-light space-y-6">
          <p className="about-line">
            Hi, I’m Tushar — a web developer who loves building clean UIs.
          </p>
          <p className="about-line">
            I specialize in React, Next.js, Convex, and Clerk.
          </p>
          <p className="about-line">
            I turn ideas into real-world products with clean code and purpose.
          </p>
          <p className="about-line">
            Currently building AI tools & writing platforms — one commit at a
            time.
          </p>
        </div>
      </section>
      <section className="min-h-screen w-2/6 flex items-center justify-center px-6 py-20 bg-lime-300 text-black">
        <div className="max-w-3xl text-xl sm:text-2xl leading-relaxed font-light space-y-6">
          <p className="about-line">
            When I’m not coding, you’ll find me exploring new tech, reading, or
            enjoying a good cup of coffee.
          </p>
          <p className="about-line">
            Let’s connect and build something amazing together!
          </p>
        </div>
      </section>
    </div>
    </div>
  );
}
