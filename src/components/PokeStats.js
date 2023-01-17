import React from 'react'

const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""

const PokeStats = ({ pokeArr, selectedPokemon }) => {
    return (

        <div className='pokestats-div'>
            <h3>{capitalize(pokeArr[selectedPokemon].name)} Stats</h3>
            <p>Type: {`${capitalize(pokeArr[selectedPokemon].type[0])}, ${capitalize(pokeArr[selectedPokemon].type[1])}`}</p>
            <p>Abilities: {`${capitalize(pokeArr[selectedPokemon].abilities[0])}, ${capitalize(pokeArr[selectedPokemon].abilities[1])}`}</p>
            <p>Height: {pokeArr[selectedPokemon].height}</p>
            <p>Weight: {pokeArr[selectedPokemon].weight}</p>
            <p>Base Experience: {pokeArr[selectedPokemon].base_experience}</p>

        </div>
    )
}

export default PokeStats