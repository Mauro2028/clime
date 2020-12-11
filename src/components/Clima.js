import React from 'react';
const Clima=({resultado})=>{
    const {nombre,main}={resultado};
    if(!nombre) return null;
    const kelvin=273.15

    return(
    <div className="card border-dark">
        <div className="card-body text-dark">
            <h5 className="card-title text-center">{nombre}</h5>
            <p className="text-center">{parseInt(main.temp-kelvin,10)}<span>&#x2103;</span></p> 
             <p className="text-center">Temp minima:{parseInt(main.temp_min-kelvin,10)}<span>&#x2103;</span></p>
            <p className="text-center">Temp maxima:{parseInt(main.temp_max-kelvin,10)}<span>&#x2103;</span></p>
    </div>
    </div>
    )}
    export default Clima;