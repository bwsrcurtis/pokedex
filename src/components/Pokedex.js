import React from 'react'
import { pokeData } from '../assets/pokedata.js'

const capitalize = s => (s && s[0].toUpperCase() + s.slice(1)) || ""
let pokeArr = pokeData;



const Pokedex = () => {
    return (
        <div className='pokedex'>

        </div>
    );
}

export default Pokedex