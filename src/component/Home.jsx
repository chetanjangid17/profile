import React from "react";
import bannerImage from '../assets/bi1.jpg';
import{HiArrowNarrowRight} from 'react-icons/hi'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { motion, useScroll } from "framer-motion"



const Home = ()=>{
    return (
       

        <div name = 'Home'      >
            <motion.div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-screen '  initial={{ opacity: 0, x: "-100vw" }} // Initial position from the right
          animate={{ opacity: 1, x: 0 }} // Animation to bring the text to its normal position
          transition={{ duration: 0.8, type: "spring" }} // Animation duration and type
      >
                <p className='  text-pink-600 font-bold '>Hi My name is </p>
                <h1 className='text-6xl sm:text-8xl font-bold text-white italic  '>Chetan Jangid</h1>
                <h2 className='text-3xl sm:text-5xl  text-gray-400 italic'>I'm frontend developer</h2>
                <p className='text-lg sm:text-2xl text-gray-500 italic py-1 max-w-[700px]'>Enthusiastic and motivated frontend developer eager to kickstart a career in web development. Proficient in HTML, CSS, and JavaScript, with a solid understanding of frontend fundamentals. Skilled in creating responsive and visually appealing web interfaces. Possesses a strong willingness to learn and adapt to new technologies, frameworks, and best practices. Adept at collaborating with teams to contribute to the development of user-centric web applications. Committed to continuous self-improvement and passionate about leveraging technology to create engaging user experiences.</p>
                <div>
                
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-500 hover:border-purple-500 rounded-md'><Link to='Skills' smooth={true} duration={500}> View My Skills </Link>
         <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
            </span></button> 
            
            </div>
            
            </motion.div>
        </div>
       
    )
}
export default Home