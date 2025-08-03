import { useEffect, useRef } from "react";
import {motion} from "framer-motion";
import gsap from "gsap";
import styles from "./page.module.css";
import Image from "next/image";


const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

 export default function index({inside, projects}) {
    const {active, index} = inside
    const insideContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);

    useEffect(() => {
        //container move
        let moveContainerX = gsap.quickTo(insideContainer.current, "left", {duration: 0.8, ease: "power3"})
        let moveContainerY = gsap.quickTo(insideContainer.current, "top", {duration: 0.8, ease: "power3"})

        //cursor move
        let moveCursorX = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
        let moveCursorY = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})

        //mover label 
        let moveLabelX = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
        let moveLabelY = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})

        window.addEventListener("mousemove", (e) => {
            const {pageX, pageY} = e;
            moveContainerX(pageX);
            moveContainerY(pageY);
            moveCursorX(pageX);
            moveCursorY(pageY);
            moveLabelX(pageX);
            moveLabelY(pageY);
        })
    }, [])

    return (
        <>
        <motion.div ref={insideContainer} variants={scaleAnimation} initial="initial" animate={active? "enter": "closed"} className={styles.insideContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.insideSlider}>
                {
                    projects.map((project, index) => {
                        const {src, color} = project
                        return <div className={styles.inside} style={{backgroundColor: color}} key={`inside_${index}`}>
                              <Image 
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="photo"
                    />
                        </div>
                    })
                }
            </div>
        <motion.div ref={cursor} className={styles.cursor} variants={{scaleAnimation}} initial="initial" animate={active? "enter": "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={{scaleAnimation}} initial="initial" animate={active? "enter": "closed"}>View</motion.div>
        </motion.div>
        </>
    )
 }