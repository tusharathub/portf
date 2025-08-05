import TargetCursor from "../../../../../bits/TargetCursor/TargetCursor";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaMailBulk } from "react-icons/fa";
import Foot from "./upper";

export default function Footer() {
  return (
    <div 
      className='relative h-[800px]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[800px] w-full'>
        {/* <Foot/> */}
        <Content />
      </div>
    </div>
  )
}
 function Content() {
  return (
    <div className='bg-zinc-50 text-zinc-900 py-8  px-12 bottom-0 h-full  w-full flex flex-col justify-between'>
        <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        />
        <Section />
    </div>
  )
}

const Section = () => {
  return (
    <div className="flex flex-col mt-20 w-full">
      <div className="w-full border-t pt-10 mt-auto flex flex-col gap-10">

        <div className="flex flex-col gap-4">
          <h1 className="text-7xl "> Ahh You've reached here</h1>
          <h2 className="text-6xl">Let’s make something good</h2>
          <p className="text-3xl text-zinc-500">Feel free to reach out through any platform</p>
        </div>

        <div className="flex gap-10 text-2xl">
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 cursor-target">Twitter <FaTwitter/>  </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 cursor-target">GitHub <FaGithub/></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 cursor-target">LinkedIn <FaLinkedin/></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1  cursor-target">Email <FaMailBulk/></a>
        </div>

        <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Tushar N. All rights reserved.</p>
      </div>
    </div>
  );
};
