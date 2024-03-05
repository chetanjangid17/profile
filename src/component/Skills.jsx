import React from "react";
import html from '../assets/html.png';
import aws from "../assets/aws.png"
import css from "../assets/css.png"
import c from "../assets/c.jpg"
import cpp from "../assets/cpp.jpg"
import sql from "../assets/sql.png"
import github from "../assets/github.png"
import javascript from "../assets/javascript.png"
import r from "../assets/react.png"

const Skills =() => {
    return (
        <div name="Skills"  className='w-full h-screen  text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full'>
            <div className="sm:text-center text-center">
            <p className='text-4xl font-bold inline border-b-4   hover:border-pink-600'>
                    Skills
                </p>
                <p className="py-4">//There are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8' > 
            <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto 'src={javascript} alt={"javascript icon"}/>
                <p>javascript</p> 
            </div>
            <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto 'src={html} alt={"HTML icon"}/>
                <p>HTML</p> 
            </div>
            <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto 'src={cpp} alt={"c++ icon"}/>
                <p>C++</p> 
            </div>
            <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto 'src={css} alt={"c icon"}/>
                <p>CSS</p> 
            </div>
            <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto 'src={aws} alt={"aws icon"}/>
                <p>AWS</p> 
            </div>
            <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto 'src={github} alt={"github icon"}/>
                <p>Github</p> 
            </div>
            <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto 'src={sql} alt={"SQL icon"}/>
                <p>SQL</p> 
            </div>
            <div className='shadow-md shadow-black hover:scale-110 duration-500'>
            <img className='w-20 mx-auto 'src={r} alt={"React icon"}/>
                <p>React</p> 
            </div>
            </div>

            </div>
        </div>
    )
}
export default Skills