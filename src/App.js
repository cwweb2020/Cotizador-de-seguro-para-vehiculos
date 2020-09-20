import React, { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner'


// Styles

const Contenedor = styled.div`

max-width:600px;
margin: 0 auto;

`;

const ContenedorFormulario = styled.div`

background-color:#fff;
padding:3rem;



`;



function App() {

// Defino el State de App 

const [resumen , guardarResumen] = useState({

  cotizacion : 0 , 

   datos : {

      marca:"",
      year:"",
      plan:""
   }
})



// Defino State para Spinner  

const [cargando , actualizarCargando] = useState(false)


// Sacando datos del State 

const {cotizacion , datos} = resumen




  return (
    <div className="App">
      <Contenedor>
        <Header
            titulo="Cotizador de Seguros"
        />

      <ContenedorFormulario>
        <Formulario

      guardarResumen = {guardarResumen}
      actualizarCargando={actualizarCargando}

        />

        {cargando ? <Spinner/> : null}



        {!cargando ?  <Resumen datos = {datos} />  : null }
        

        {!cargando ?  <Resultado cotizacion ={cotizacion}/> : null }
        

     

     
      </ContenedorFormulario>

     


      </Contenedor>
    </div>
  );
}

export default App;
