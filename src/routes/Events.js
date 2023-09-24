import React from "react";
import { Footer } from "../components/Footer";
import EventBooking from "../components/Booking";
import { NavbarLo } from "../components/NavbarLo";



const Event =()=>{
    return(
        <div>  
            <NavbarLo />  
            <EventBooking />          
        <Footer />
        </div>
    )
}
export default Event;