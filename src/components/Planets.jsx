import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { context } from "../ContextProvider";


const Planets = (props) =>{

    const contextData = useContext(context)

    const planetCards = contextData.planetData.map((item, index) => (
        <div className="planetCards">
            <h3 key={index}>
                <Link to={`/planets/${item.diameter}`}>{item.name}</Link>
            </h3> 
        </div>

    ))

    return(
        <div>
            <h3 style={{textAlign: 'center'}}>Pick what planet is best for you!</h3>
            <div className="planets">
                {planetCards}
            </div> 
        </div>
    )
   
} 

export default Planets