import React from 'react'
import styled from '@emotion/styled';

const Resultado = ({cotizacion}) => {

    //Styles

    const Total = styled.h2`
    
        display:block;
        background-color:#fff;
        color:green;
        padding:1rem;
        text-align:center;
        border:3px solid lightgreen ;

    `;



  

    //Functions
    if(cotizacion === 0 ) return null
    return (
        <div>
            <Total><small style={{color:"black"}}>Total a pagar</small> $ {cotizacion}</Total>
        </div>
    )
}

export default Resultado
