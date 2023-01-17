import React from 'react'

const PokeImage = ({ pokeArr }) => {
    return (
        <div className='image-div'>
            <img className='poke-img' src={pokeArr[0].imgURL} alt={pokeArr[0].name}></img>
        </div>
    )
}

export default PokeImage