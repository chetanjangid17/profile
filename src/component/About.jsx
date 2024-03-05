import React from "react";
// import motion from "framermotion";
const About =() => {
    return(
        <div name = 'About' className='w-full h-screen text-gray-300'>
        <div className=' flex flex-col justify-center items-center w-full h-screen'>
        <div className='pb-8 sm:text-center text-center'>
                <p className='text-4xl font-bold inline border-b-4 hover:border-pink-600  '>
                    About
                </p>
            </div>
        
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4 '>
        <div className='sm:text-4xl font-bold text-2xl'>
        <p>Hi. I'm chetan,nice to meet you.please take look a around</p>
        </div>
        <p>Enthusiastic and motivated frontend developer eager to kickstart a career in web development. Proficient in HTML, CSS, and JavaScript, with a solid understanding of frontend fundamentals. Skilled in creating responsive and visually appealing web interfaces. Possesses a strong willingness to learn and adapt to new technologies, frameworks, and best practices. </p>
        </div>
        </div>
        </div>
    )
};
export default About