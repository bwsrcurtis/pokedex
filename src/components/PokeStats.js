import React from 'react'

const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""

const PokeStats = ({ pokeArr }) => {
    return (

        <div className='pokestats-div'>
            <h3>{capitalize(pokeArr[0].name)} Stats</h3>
            <p>Height: {pokeArr[0].height}</p>
            <p>Weight: {pokeArr[0].weight}</p>
            <p>Abilities: {`${capitalize(pokeArr[0].abilities[0])}, ${capitalize(pokeArr[0].abilities[1])}`}</p>
            <p>Type: {`${capitalize(pokeArr[8].type[0])}, ${capitalize(pokeArr[8].type[1])}`}</p>

        </div>
    )
}

export default PokeStats