import TargetCursor from "../../../../bits/TargetCursor/TargetCursor";
import MagnetLines from "../../../../bits/MagnetLines/MagnetLines";
import { FaGithub, FaTwitter, FaLinkedin, FaMailBulk, FaFile } from "react-icons/fa";

export default function Footer() {
  return (
    <div 
      className='relative h-[800px]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className='fixed bottom-0 h-[800px] w-full'>
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
    <div className="flex  mt-30 w-full border-t-2 border-gray-800 pt-10">
      <div className="w-4/6 pt-10  flex flex-col gap-10">

        <div className="flex flex-col gap-4">
          <h1 className="text-7xl "> Ahh You've reached here</h1>
          <h2 className="text-6xl">Let’s make something good</h2>
          <p className="text-3xl text-zinc-500">Feel free to reach out through any platform</p>
        </div>

        <div className="flex gap-10 text-2xl">
          <a href="https://x.com/tushar_nerd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 cursor-target">Twitter <FaTwitter/>  </a>
          <a href="https://github.com/tusharathub" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 cursor-target">GitHub <FaGithub/></a>
          <a href="https://www.linkedin.com/in/tushar-nailwal/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 cursor-target">LinkedIn <FaLinkedin/></a>
          <a href="" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 cursor-target">Resume <FaFile/></a>
          <a href="mailto:tushar.chd17@gmail.com?subject=Query%20Related%20to&body=Hi%20Tushar," target="_blank" rel="noopener noreferrer" className="flex items-center gap-1  cursor-target">Email <FaMailBulk/></a>
        </div>

        <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Tushar N. All rights reserved.</p>
      </div>
      <div className="w-2/6 flex mt-10 items-center justify-center">
        <MagnetLines
          rows={9}
          columns={9}
          containerSize="40vmin"
          lineColor="black"
          lineWidth="0.3vmin"
          lineHeight="4vmin"
          baseAngle={0}
        />
      </div>
    </div>
  );
};
