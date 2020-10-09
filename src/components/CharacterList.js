import React from 'react'
import Character from './Character'

export default function CharacterList(props) {
    const {charactersArray} = props

    return (
        <div className = "characters-container">
            {charactersArray.map((characterObj)=> {
                return (
                    <Character 
                    key = {characterObj.created}
                    characterDetails = {characterObj}
                    />
                )
            })}
        </div>
    )

}