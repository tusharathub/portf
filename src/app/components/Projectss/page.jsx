import Project from "./RealProjects/index"
import Inside from "./inside/index"
import { useState } from "react";


const projects = [
  {
    title: "Color Palaette",
    src: "1.jpg",
    color: "#000000",
    detailes: "A color palette generator that helps you create beautiful color schemes for your projects.",
    link: "https://www.youtube.com"
  },
  {
    title: "Chat Application",
    src: "2.jpg",
    color: "#8C8C8C",
    detailes: "A modern chat application that combines functionality with aesthetics.",
    link: "https://www.google.com"
  },
  {
    title: "Chat Application 2",
    src: "3.jpg",
    color: "#EFE8D3",
    detailes: "A modern chat application that showcases the power and elegance of real-time communication.",
    link: "https://www.facebook.com" 
  },
  {
    title: "Wisdom Finder",
    src: "4.jpg",
    color: "#706D63",
    detailes: "A serene design project that emphasizes tranquility and simplicity.",
    link: "https://www.instagram.com"
  }
]

export default function ProjectsPage() {
    const [inside, setInside] = useState({active: false, index: 0});

    return(
        <main id='Work' className='flex h-100vh justify-center items-center bg-zinc-50 text-zinc-900 '>
            <div className='flex items-center justify-center  flex-col '>
                {projects.map((project, index) => {
                    return <Project index={index} title={project.title} detailes={project.detailes} link={project.link} setInside={setInside} key={index} />
                })}
            </div>
            <Inside inside={inside} projects={projects} />
        </main>
    )
}