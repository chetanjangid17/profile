import React,{useState} from "react"
import {FaBars, FaTimes,FaGithub,FaLinkedinIn, FaFacebook, FaLinkedin} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import cj from '../assets/cj.png'
import Resume from '../assets/Resume.pdf'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
const Navbar = ()=>{
    const [nav,setNav]= useState(false)
    const handleclick =() => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-900 text-gray-300'>
         <div ><Link to='Home' smooth={true} duration={500}>
            <img src ={cj} alt ="Logo Image" style={{width:'50px'}}></img>  
            </Link>
         </div>   
         
            <ul className='hidden md:flex'>
            <li  className=' text-2xl hover:bg-pink-600 inline border-b-2  hover:border-white hover:rounded-md'><Link to='Home' smooth={true} duration={500}>Home</Link></li>
            <li  className=' text-2xl hover:bg-pink-600 inline border-b-2  hover:border-white hover:rounded-md'><Link to='About' smooth={true} duration={500}>About</Link></li>
            <li  className=' text-2xl hover:bg-pink-600 inline border-b-2  hover:border-white hover:rounded-md'><Link to='Skills' smooth={true} duration={500}>Skills</Link></li>
            <li  className=' text-2xl hover:bg-pink-600 inline border-b-2  hover:border-white hover:rounded-md'><Link to='Contact' smooth={true} duration={500}>Contact</Link></li>
                
            </ul>
         
         {/* {hamburgurs} */}
         <div onClick ={handleclick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}

         </div>
         {/* {mobile menu} */}
         
         <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
                <li className='py-6 text-4xl  hover:bg-purple-500 hover:border-purple-500'><Link onClick={handleclick} className=''to='Home' smooth={true} duration={500}>Home</Link></li>
                <li className='py-6 text-4xl  hover:bg-purple-500 hover:border-purple-500 '><Link onClick={handleclick} to='About' smooth={true} duration={500}>About</Link></li>
                <li className='py-6 text-4xl  hover:bg-purple-500 hover:border-purple-500'><Link onClick={handleclick} to='Skills' smooth={true} duration={500}>Skills</Link></li>
                <li className='py-6 text-4xl  hover:bg-purple-500 hover:border-purple-500'><Link onClick={handleclick}  to='Contact' smooth={true} duration={500}>Contact</Link></li>
            </ul>
        
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'> 
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 rounded-md">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/chetan-jangid-861250157/">LinkedIn <FaLinkedin/></a>
                
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800 rounded-md">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://github.com/chetanjangid17/">GitHub<FaGithub/></a>
                
            </li>
           
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500 rounded-md">
            <a className="flex justify-between items-center w-full text-gray-300" href={Resume} download="Resume">Resume <BsFillPersonLinesFill/></a>
                
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500 rounded-md">
            <a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/chetan-jangid-861250157/">Email<HiOutlineMail/></a>
                
            </li>
        </ul>
        </div>
        </div>
    )
}
export default Navbar