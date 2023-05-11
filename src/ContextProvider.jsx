import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const context = createContext()

const ContextProvider = (props) =>{
    
    const [planetData, setPlanetData] = useState([])

    useEffect(()=>{
        axios.get('https://swapi.dev/api/planets/')
        .then(res => setPlanetData(res.data.results))
        .catch(err => console.log(err))
    }, [])

    console.log(planetData)

    return(
        <context.Provider
            value={{
                planetData: planetData
            }}
        >
            {props.children}
        </context.Provider>
    )
}

export {context, ContextProvider}