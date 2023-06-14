import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Analytics from "./components/Analytics/Analytics"
// import {Route,Routes} from 'react-router-dom'


const  App = () => {
  

  return (
    <>
     <Navbar/>
       <Hero />
       <Analytics/>
    </>
  )
}

export default App
