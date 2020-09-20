import React from 'react'
import styled from '@emotion/styled';


//Styles

const ContenedorResumen = styled.div `

 
 background-color : #00838F;
 text-align:center;
 padding:1rem;
 color:#fff;
 margin-top:1rem;



`;

const ListItem = styled.li`

display:block;
width:100%;
background-color:#fff;
color:#00838F;
margin:1rem 0rem;
border:1px solid #00838F;
padding:1rem 0rem;



`;



//Functions

const Resumen = ({datos}) => {


    const {marca , year , plan} = datos

    
    if(marca === "" || year === "" || plan === "") return null;

    return (
        <ContenedorResumen>

            <h4>Resultado de Cotizacion </h4>
            <ul style={{display:"block"}}>
                <ListItem>Marca :  {marca}</ListItem>
                <ListItem>Año :   {year}  </ListItem>
                <ListItem>Plan : {plan}</ListItem>
            </ul>
            
            
        </ContenedorResumen>
    )
}

export default Resumen
