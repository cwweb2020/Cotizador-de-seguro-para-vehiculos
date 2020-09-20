import React , {Fragment}from 'react'
import styled from '@emotion/styled';



const ComponentHeader = styled.header`

    background-color:#26C6DA;
    padding:10px;
    font-weight:bold;
    color:#fff

`;


const TextoHeader = styled.h1`

    font-size:2rem ; 
    margin:0;
    font-family:"Slabo 27px" serif ;
    text-align:center;
    

`;






const Header = ({titulo}) => {
    return (
        <Fragment>

            <ComponentHeader>
                <TextoHeader>{titulo}</TextoHeader>
            </ComponentHeader>
            

        </Fragment>
    )
}

export default Header
