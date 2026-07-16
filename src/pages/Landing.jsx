import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import "../styles/landing.css";
import Journey from "../components/Journey";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

import { useState, useEffect } from "react";
import {FiSettings, FiMoon, FiSun} from "react-icons/fi";

function Landing(){

    return(

        <div className="landing">

            <Navbar/>
            <Hero/>
            <Features/>
            <Journey/>
            <Testimonials/>
            <Footer/>

        </div>
    )
}

export default Landing;