import { useState, React } from 'react'
import { pokeData } from '../assets/pokedata.js'
import PokeImage from './PokeImage.js';
import PokeList from './PokeList.js';
import PokeStats from './PokeStats.js';
import PokeDesc from './PokeDesc.js';

const Pokedex = () => {

    let initPokeArr = pokeData;

    const [pokeArr, setPokeArr] = useState(initPokeArr)

    const [selectedPokemon, setSelectedPokemon] = useState(0)

    const selectPokemon = (e) => {
        // set the index of the selected pokemon
        let name = e.target.innerText.toLowerCase()
        let index = pokeArr.findIndex(x => x.name === name)
        setSelectedPokemon(index)
    }

    const filterPokeArr = (e) => {
        // modify the pokemon array by a matching value
        let search = e.target.value.toLowerCase()
        let filteredArr = initPokeArr.filter((x) => {
            return x.name === search ||
                x.type[0] === search ||
                x.type[1] === search;
        })
        if (filteredArr.length > 0) {
            setPokeArr(filteredArr)
            setSelectedPokemon(0)
        }
        else {
            setPokeArr(initPokeArr)
            setSelectedPokemon(0)
        }
    }

    return (
        <div className='pokedex'>
            <h1 className='title'>Réact Pokédex</h1>
            <div className='pokedex-grid'>
                <PokeImage pokeArr={pokeArr} selectedPokemon={selectedPokemon} />
                <PokeList pokeArr={pokeArr} selectPokemon={selectPokemon} filter={filterPokeArr} />
                <PokeStats pokeArr={pokeArr} selectedPokemon={selectedPokemon} />
                <PokeDesc pokeArr={pokeArr} selectedPokemon={selectedPokemon} />
            </div>
        </div>
    );
}

export default Pokedex