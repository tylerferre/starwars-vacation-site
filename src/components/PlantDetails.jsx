import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { context } from "../ContextProvider";

const PlanetDetails = () =>{

    const navigate = useNavigate()
    const contextData = useContext(context)

    const {planetId} = useParams()
    const foundPlanet = contextData.planetData.find((item) => item.diameter === planetId)

    return(
        <div className="planetDetails">
            <h2>{foundPlanet.name}</h2>
            <div className="details">
                <p>Climate: {foundPlanet.climate}</p>
                <p>Terrain: {foundPlanet.terrain}</p>
                <p>Gravity: {foundPlanet.gravity}</p>
                <p>Population: {foundPlanet.population}</p>
            </div>
            <div className="detailButtons">
                <button onClick={()=>navigate('/planets')}>Back</button>
                <button onClick={()=>navigate('/checkout')}>Pick this planet!</button>
            </div>

        </div>
    )
}

export default PlanetDetails