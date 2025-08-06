import styles from "./Page.module.css"
import gsap from "gsap"

const skills = [

    {
        title: "Next.Js",
        color: "#0CBCF0"
    },
    {
        title: "ReactJs",
        color: "#F0BA18"
    },
    {
        title: "Javascript",
        color: "#DCF018"
    },
    {
        title: "Typescript",
        color: "#18F0E8"
    },
    {
        title: "MongoDB",
        color: "#8C0CF0"
    },
    {
        title: "Express",
        color: "#91F018"
    },
    {
        title: "NodeJs",
        color: "#F06318"
    },
    {
        title: "Tailwind CSS",
        color: "#0C34F0"
    },
    {
        title: "Convex",
        color: "#F0183C"
    },
    {
        title: "Github",
        color: "#F0F018"
    },
]

 export default function Skills() {
    const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {top: "-2vw", backgroundColor: skills[index].color, duration: 0.3})
  }

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {top: "0", backgroundColor: "#fafafa", duration: 0.3, delay: 0.1})
  }


    return(
        <div id="Skills" className={styles.container}>
            <div className={styles.projectContainer}>
                {
                    skills.map((skill, index) => {
                        return <div onMouseEnter={(e) => {manageMouseEnter(e,index)}} onMouseLeave={(e)=> manageMouseLeave(e,index)} key={index}>
                            <p>{skill.title}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )    
}