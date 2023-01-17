import React from 'react'

const PokeDesc = ({ pokeArr }) => {
    return (
        <div className={`pokemon-desc-div ${pokeArr[0].type[0]}`}>
            <h1>Pokedex Description</h1>
            <h3>{pokeArr[0].pokedexDescription}</h3>
        </div>
    )
}

export default PokeDesc