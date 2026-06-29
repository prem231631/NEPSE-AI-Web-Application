import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import "../styles/landing.css";

function Landing(){

    return(

        <div className="landing">

            <Navbar/>
            <Hero/>
            <Features/>

        </div>
    )
}

export default Landing;