import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () =>{

    const navigate = useNavigate()

    return(
        <div className="home">
            <div className="imgDiv"><span>Far Far Away Destinations</span></div>
            <div className="homeButton"><button onClick={()=>navigate('/planets')}>Get Started!</button></div>
        </div>
    )
    
}

export default Home