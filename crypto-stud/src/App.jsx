import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Analytics from "./components/Analytics/Analytics"
import Card from "./components/Card/Card"
import Newslletter from "./components/Newsletter/Newslletter"
import Footer from "./components/Footer/Footer"


const  App = () => {
  

  return (
    <>
     <Navbar/>
       <Hero />
       <Analytics/>
       <Newslletter/>
       <Card/>
       <Footer/>
    </>
  )
}

export default App
