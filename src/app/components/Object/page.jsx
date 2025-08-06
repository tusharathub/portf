import { motion } from 'framer-motion'
import React from 'react'

export default function Object() {
    return (
        <div className='bg-zinc-50 w-full py-20  rounded-tr-2xl rounded-tl-2xl'>
            <div className='flex whitespace-nowrap text-zinc-900 border-t-2 border-b-2 border-gray-800 overflow-hidden'>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear" , duration: 8 , repeat: Infinity}} className='text-[17vw] leading-none font-["grotesk"] uppercase px-8'>I am Tushar N.</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear" , duration: 8 , repeat: Infinity}} className='text-[17vw] leading-none font-["grotesk"] uppercase px-8'>I am Tushar N.</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear" , duration: 8 , repeat: Infinity}} className='text-[17vw] leading-none font-["grotesk"] uppercase px-8'>I am Tushar N.</motion.h1>
                <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear" , duration: 8 , repeat: Infinity}} className='text-[17vw] leading-none font-["grotesk"] uppercase px-8'>I am Tushar N.</motion.h1>
            </div>
        </div>
    )
}