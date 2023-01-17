import React from 'react'

const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""

const PokeList = ({ pokeArr }) => {
    return (
        <div className='pokemon-name-list-div'>
            <div className='search-div'>
                <input type='text' placeholder='Pokemon Name or Type'></input>
            </div>
            <div className='pokemon-list-div'>
                {pokeArr.map((x) => <p key={x.id} className={`pokemon-list ${x.type[0]}`}>{`${capitalize(x.name)}`}</p>)}
            </div>
        </div>
    )
}

export default PokeList