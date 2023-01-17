import React from 'react'

const PokeImage = ({ pokeArr, selectedPokemon }) => {
    return (
        <div className='image-div'>
            <img className='poke-img' src={pokeArr[selectedPokemon].imgURL} alt={pokeArr[selectedPokemon].name}></img>
        </div>
    )
}

export default PokeImage