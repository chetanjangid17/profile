import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Skills from './component/Skills'
import './App.css'
import Contact from './component/Contact'
import Project from './component/Project'

function App() {
  return (
    <> <div className=" bg-gray-900 w-full h-full ">

        <Navbar/>
        <Home/>
        <About/>
        <Skills/>
        <Contact/>
        <Project  />
    </div>
    </>
  );
}

export default App
