import React from 'react'

const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""

const PokeList = ({ pokeArr }) => {
    return (
        <div className='pokemon-name-list-div'>
            <p className='choose'>CHOOSE NEXT POKEMON</p>
            <div className='pokemon-list-div'>
                <p className='pokemon-list normal'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list fire'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list water'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list grass'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list electric'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list ice'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list fighting'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list poison'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list ground'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list flying'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list psychic'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list bug'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list rock'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list ghost'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list dark'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list dragon'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list steel'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list fairy'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list'>{capitalize(pokeArr[0].name)}</p>
                <p className='pokemon-list'>{capitalize(pokeArr[0].name)}</p>

            </div>
        </div>
    )
}

export default PokeList