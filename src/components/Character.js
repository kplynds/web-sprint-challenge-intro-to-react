// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 30px 200px;
    padding: 5px;
    border-style: solid;
    border-color: green;
    border-width: 2px;
    color: red;

    p {
        padding: 20px;
        font-size: 1.5rem;
    }
`
export default function Character(props) {
    const {characterDetails} = props

    return (
        <StyledCard>
            <p>{characterDetails.name}</p>
            <p>{characterDetails.birth_year}</p>
        </StyledCard>
    )
}