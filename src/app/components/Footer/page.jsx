'use client'

import Intro from "./Contents/intro";
import { useEffect } from "react";
import Lenis from 'lenis';
import Content from "./Contents/contents";

export default function FooterPage() {

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main>
      <Intro />
      {/* <Content/> */}
    </main>
  );
}