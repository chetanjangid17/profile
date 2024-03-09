import React from 'react'
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import ProCard from './Procard.jsx'

function Project() {
  return (
    <div name = 'Project'>
        <div className=' py-12 px-2 text-gray-300 justify-center items-center w-full h-screen'>
        <div className=' sm:text-center py-9 text-center '>
                <h1 className='text-4xl font-bold py-1 inline border-b-4 hover:border-pink-600  '>
                    Projects
                </h1>
                <p className="py-4">//Heyy!! this is my project section</p>
        <div className='  grid sm:grid-cols-2  grid-cols-2 mx-auto  max-w-[900px]  '>

            <ProCard  tittle={"Email Spam Detector"} para={"Developed a machine learning model for email spam detection to alleviate the problem of spam emails inundating user inboxes by using AI ML algorithms."} ima={p1} ln={"https://email-spam-detection17.streamlit.app/"}/>
            <ProCard  tittle={"Bank Mangment System"} para={"A Bank Management System is a software application that facilitates the efficient and organized management of banking operations by using JFrame and Java."} ima={p2} ln={"https://email-spam-detection17.streamlit.app/"}/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Project