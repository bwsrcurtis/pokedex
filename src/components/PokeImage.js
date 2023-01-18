import React from 'react'

const PokeImage = ({ pokeArr, selectedPokemon, active, triggerFade }) => {


    return (
        <div className='image-div'>
            <img onAnimationEnd={triggerFade} className={`poke-img ${active ? 'active' : 'finished'}`} src={pokeArr[selectedPokemon].imgURL} alt={pokeArr[selectedPokemon].name}></img>
        </div>
    )
}

export default PokeImage