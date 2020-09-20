import React,{useState} from "react";

import styled from '@emotion/styled';
import {obtenerDiferenciaYear , calcularMarca , obtenerPlan} from '../helper'


//Styles


const Campo = styled.div`

display:flex;
margin-bottom:1rem;
align-items:center;

`;

const Label = styled.label`

flex: 0 0 100px;

`;


const Select = styled.select`

    display:block;
    width:100%;
    padding:1rem;
    border:1px solid #e1e1e1;
    webkit-appearance:none;


`;

const InputRadio = styled.input`

    margin: 1rem;


`;

const Boton = styled.button`

display:block;
width:100%;
padding:1rem;
background-color:lightgreen;
color:#fff;
text-transform: uppercase;
margin-top:30px;
transition:background-color 1s;
font-weight:bold;
letter-spacing:5px;
margin-top:2rem;
border:none;

&:hover {

    cursor:pointer;
    background-color: #26C6DA;
}



`;



const ErrorMsg = styled.div`

background-color: #fff;
color:red;
width:100%;
padding:1rem;
font-size:20px;
text-transform:uppercase;
text-align:center;
border:1px solid red;
margin:1rem auto;


`;




//Fin de Styles ******************************** 




const Formulario = ({guardarResumen,actualizarCargando}) => {

// Creando el State para Formulario
const [datos, guardarDatos] = useState({

    marca:"",
    year:"",
    plan:"",

})

// El State del Error 

const [error , actualizarError] = useState(false)


// Extraer los datos del State

const {marca,year,plan} = datos;


// guardando en el State

const obtenerInformacion = e => {

    guardarDatos({
        ...datos,
        [e.target.name]:e.target.value

    })
}

// Funccion del Subit del form 


 const cotizarSeguro = e => {

    e.preventDefault();

    // Validar 

    if(marca.trim()==="" || year.trim()==="" || plan.trim()==="") {

        actualizarError(true)
        return;
    }

    actualizarError(false)


    // definir base de valor 

    let resultado = 2000 ;

    // obtener diferencia de años

    const diferencia = obtenerDiferenciaYear(year)


    // por cada año hay que restar 3%

     resultado -= ((diferencia * 3) * resultado / 100) ;

    

    // Americano 15%
    // Asiatico 5%
    // Europeo 30%

    resultado = (calcularMarca(marca) * resultado) ;



    // Basico aumenta 20%
    //Completo 50%

    const  planElegido = obtenerPlan(plan)



    //Total

    resultado = parseFloat( planElegido * resultado).toFixed(2)
    console.log(resultado)



    // Agrega el Spinner (Animacion )
    actualizarCargando(true)

    setTimeout(()=>{

        // elimina el Spinner
        actualizarCargando(false)

            // envia el resultado con resumen a componente principal 
        guardarResumen({

            cotizacion : resultado , 
            datos,
        })



    },3000)

    


    // restaurando el form  

    guardarDatos({

        marca:"",
        year:"",
        plan:""
    })




}


  return (
    <div>

            {error ? <div> <ErrorMsg>Todos los campos son obligatorios</ErrorMsg> </div>     : null}
        
            <form onSubmit={cotizarSeguro}>

                        <Campo>
                            <Label>Marca</Label>

                            <Select
                            
                            name="marca"
                            value={marca}
                            onChange={obtenerInformacion}
                            
                            >
                                <option value="">-- Seleccione --</option>
                                <option value="Americano">Americano</option>
                                <option value="Europeo">Europeo</option>
                                <option value="Asiatico">Asiatico</option>
                                
                            </Select>

                        </Campo>

                        <Campo>
                            <Label>Año</Label>

                            <Select
                            
                            name="year"
                            value={year}
                            onChange={obtenerInformacion}
                            >
                                <option value="">-- Seleccione --</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                            </Select>
                        </Campo>



                        <Campo>
                            <Label>Plan</Label>

                        <InputRadio 
                            type="radio"
                            name="plan"
                            value="Basico"
                            checked = {plan ==="Basico"}
                            onChange={obtenerInformacion}
                            
                        />Basico



                        <InputRadio 
                            type="radio"
                            value="Completo"
                            name="plan"
                            checked = {plan ==="Completo"}
                            onChange={obtenerInformacion}
                            
                        />Completo

                        </Campo>

                        <Boton type="submit">Cotizar</Boton>
            </form>
    </div>
  );
};

export default Formulario;
