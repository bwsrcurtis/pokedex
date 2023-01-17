import React from 'react'

const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""

const PokeList = ({ pokeArr, selectPokemon, filter }) => {
    return (
        <div className='pokemon-name-list-div'>
            <div className='search-div'>
                <input onChange={filter} type='text' placeholder='Name, Type, or Ability'></input>
            </div>
            <div className='pokemon-list-div'>
                {pokeArr.map((x) => <p onClick={selectPokemon} key={x.id} className={`pokemon-list ${x.type[0]}`}>{`${capitalize(x.name)}`}</p>)}
            </div>
        </div>
    )
}

export default PokeList