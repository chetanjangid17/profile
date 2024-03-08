import React from 'react'
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
function Project() {
  return (
    <div name = 'Project' className='w-full h-screen text-gray-300'>
        <div className=' flex flex-col justify-center items-center w-full h-screen'>
        <div className='pb-8 sm:text-center text-center'>
                <p className='text-4xl font-bold inline border-b-4 hover:border-pink-600  '>
                    Project
                </p>
    <h1 className=" text-2xl px-6 py-4 ">heyy.. this my Project Section</h1>
    <div className="  py-2 px-2  max-w-[1250px]  ">
    <div className="  text-white mx-auto grid-cols-2 gap-10  grid sm:grid-cols-2 ">
    <div className=" rounded overflow-hidden  shadow-md shadow-black ">
    <div className="px-6 py-4">
        <h3 className=" text-xl sm:text-3xl text-center text-gray-600 ">Email Spam Detector</h3>
        <p className=" text-left py-2 m-3"> Developed a machine learning model for email spam detection to alleviate the problem of spam emails
inundating user inboxes by using AI ML algorithms.
</p>
</div>
<div className=" ">

<a href='https://email-spam-detection17.streamlit.app/'>
<img className='  mx-[auto]  hover:scale-110 duration-500 px-2 py-4 ' src ={p1} alt ="Logo Image" style={{width:'400px', height:'250px'}}>

</img>  
</a>
</div>
    </div>
    <div className=" rounded overflow-hidden shadow-md shadow-black">
    <div className="px-6 py-4">
        
        <h3 className=" text-xl sm:text-3xl text-center text-gray-600">Bank Mangment System</h3>
        <p className=" text-center py-2 sm:py-5">A Bank Management System is a software application that facilitates the efficient and organized management 
of banking operations by using JFrame and Java.
</p>
    </div>
    <img className='mx-[auto]    hover:scale-110 duration-500  px-2 py-4 '  src ={p2} alt ="Logo Image" style={{width:'400px', height:'250px'}}></img>  
    
    </div>
    </div>
</div>
    </div>
    </div>
    </div>
  )
}

export default Project