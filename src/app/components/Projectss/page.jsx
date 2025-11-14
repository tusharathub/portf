"use client"
import Project from "./RealProjects/index"
import Inside from "./inside/index"
import { useState } from "react";


const projects = [
    {
    title: "Wisdom Finder",
    src: "wisdom.png",
    color: "#706D63",
    detailes: "Obtain real wisdom from the real people like YOU",
    link: "https://wisdom-beta.vercel.app/"
  },
  {
    title: "NotableCV",
    src: "notableCV.png",
    color: "#8C8C8C",
    detailes: "An AI-powered platform that analyzes resumes and job descriptions to generate personalized cover-letter suggestions",
    link: "https://notable-cv.vercel.app/"
  },
  {
    title: "RoutineMelt",
    src: "routineMelt.png",
    color: "#000000",
    detailes: "A GitHub-style habit and task tracker that visualizes daily progress through an interactive contribution grid",
    link: "https://routine-melt.vercel.app/"
  },
  {
    title: "Lift-Ai",
    src: "liftAI.png",
    color: "#EFE8D3",
    detailes: "A modern way to be fit and meet your body goals using Artificial Intelligence.",
    link: "https://lift-ai-six.vercel.app/" 
  },
  // {
  //   title: "Ochi Clone",
  //   src: "ochi-clone.png",
  //   color: "#706D63",
  //   detailes: "A stunning clone of an agency called OCHI",
  //   link: "https://ochi-beige.vercel.app/"
  // }
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