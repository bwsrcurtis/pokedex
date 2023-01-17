import React from 'react'
import { pokeData } from '../assets/pokedata.js'
import PokeImage from './PokeImage.js';
import PokeList from './PokeList.js';
import PokeStats from './PokeStats.js';


let pokeArr = pokeData;



const Pokedex = () => {
    return (
        <div className='pokedex'>
            <h1 className='title'>Réact Pokédex</h1>
            <div className='pokedex-grid'>
                <PokeImage pokeArr={pokeArr} />
                <PokeList pokeArr={pokeArr} />
                <PokeStats pokeArr={pokeArr} />
            </div>
        </div>
    );
}

export default Pokedex