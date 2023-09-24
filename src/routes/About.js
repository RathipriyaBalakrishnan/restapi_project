import React from "react";
// import { Navbar } from "../components/Navbar";
import HeroImage from "../components/Heroimage";
import { Footer } from "../components/Footer";
import { NavbarLo } from "../components/NavbarLo";



const About =()=>{
    return(
        <div>  
            <NavbarLo />   
            <HeroImage
          heading="Welcome to Event Breeze..!"
          text="Book your favorite events with ease and excitement."
          backgroundImage="url('../assets.heroimg.jpg')"
        />
        <Footer />
        </div>
    )
}
export default About;