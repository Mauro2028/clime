import React, { useState } from "react";

const Formulario=({datosConsulta})=>{
    const[busqueda, guardarbusqueda]= useState({
        ciudad:'',
        pais:'',
    })
    const handleChange=(e)=>{
        guardarbusqueda({
            guardarbusqueda,[e.target.name]: e.target.value
        });

};
const ConsultarClima =(e)=>
e.preventDefault();
datosConsulta(busqueda)

    return(
        
    <form onSubmit={ConsultarClima}>
        <div className="form-group">
           <label htmlFor="TxtCiudad"> ciudad </label> 
           <input
           type="text"
           className="form-control"
           placeholder="ingresa tu ciudad"
           id="txtCiudad"
           name="ciudad"
           onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label>pais</label>
                <select type="Text"
                className="form-control"
                name="pais"
                onChange={handleChange}
                >
                    <option value="">selecciona un pais</option>;
                    <option value="AR">Argentina</option>;
                    <option value="IT">Italia</option>;
                    <option value="GB">Reino Unido</option>;
                    <option value="ve">Venezuela</option>;
                </select>

            </div>
            <input
            type="submit"
            className="btn btn-primary btn btn-block my-2"
            value="consultar">

            </input>
    </form>
    
    );}
    export default Formulario