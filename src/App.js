import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header.js";
import Formulario from "./components/Formulario.js";
import Error from "./components/Error.js";
import Clima from "./components/Clima.js"
function App() {
  const [ciudad,guardarCiudad]=useState("");
  const [pais,guardarPais]= useState("");
  const [error,guardarError]=useState(false);
  const [resultado,guardarResultado]=useState({});


  useEffect(()=>{
    if(ciudad==='') return
    const consultarApi= async ()=>{
      const apiKey= "e5fad9e8ad104dc36a0d1df9e6c9eeea";
      const url= `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais},stat&appid${apiKey}`;
      const answer= await fetch(url);
      const resultado= await answer.json();
     guardarResultado(resultado)
     
    
  }
  consultarApi()
},[ciudad,pais])

  const datosConsulta=(datos)=>{
    if(datos.ciudad==='' ||datos.pais===''){
      guardarError(true)
return;}
    
    guardarCiudad(datos.ciudad);
    guardarPais (datos.pais);
    guardarError(false);
    
  };
  var componenteError;
  if (error){
    componenteError=<Error 
    mensaje="Ambos campos son requeridos"/>
  }
  else if(resultado.cod==="404"){
    componenteError=<Error mensaje="Esta info es incorrecta"/>
  }
  else{
    componenteError=<Clima resultado={resultado}/>
  };
  return (
    <Fragment>
    <div className="container">
    <div className="row"> 
    <div className="col-12 bg-primary">
      <Header
      Titulo="clime react hooks"/>
    </div>
    </div>
    </div>
    <div className="container">
    <div className="row"> 
    <div className="col-12 col-md-6 ">
     <Formulario
     datosConsulta={datosConsulta}/>
     </div>
      <div className="col-12 col-md-6 ">
        {componenteError}
      </div>
      </div>
</div>
</Fragment>

    );
}

export default App;
