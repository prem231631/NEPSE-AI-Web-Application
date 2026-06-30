import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import "../styles/landing.css";
import Journey from "../components/Journey";

function Landing(){

    return(

        <div className="landing">

            <Navbar/>
            <Hero/>
            <Features/>
            <Journey/>

        </div>
    )
}

export default Landing;