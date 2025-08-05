import React from 'react'
import TargetCursor from "../../../../../bits/TargetCursor/TargetCursor";

export default function Content() {
  return (
    <div className='bg-zinc-50 text-zinc-900 py-8 px-12 h-full w-full flex flex-col justify-between'>
        <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        />

        < Section1 />
        <Section2 />
    </div>
  )
}

const Section1 = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

const Section2 = () => {
    return (
        <div className='flex justify-between items-end'>
            {/* <h1 className='text-[14vw] leading-[0.8] mt-10 '>Sticky Footer</h1> */}
            <p>©copyright</p>
        </div>
    )
}

const Nav = () => {
    return (
        <div className='flex shrink-0 gap-20'>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80] '>About</h3>
                <p className='cursor-target'>Home</p>
                <p className='cursor-target'>Projects</p>
                <p className='cursor-target'>Our Mission</p>
                <p className='cursor-target'>Contact Us</p>
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='mb-2 uppercase text-[#ffffff80]'>Education</h3>
                <p className='cursor-target'>News</p>
                <p className='cursor-target'>Learn</p>
                <p className='cursor-target'>Certification</p>
                <p className='cursor-target'>Publications</p>
            </div>
        </div>
    )
}