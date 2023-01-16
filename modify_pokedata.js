import pokedata from './pokedata.json' assert { type: 'json' };
import { pokeTypes } from './pokemonTypes.js';
import * as fs from 'fs';

let types = pokeTypes
let updatedPokeData = pokedata

// console.log(types.pokemon_v2_pokemonsprites[0].pokemon_v2_pokemon.pokemon_v2_pokemontypes[0]['pokemon_id'])

updatedPokeData.map((x) => {
    if (x.id == types.pokemon_v2_pokemonsprites[x.id-1].pokemon_v2_pokemon.pokemon_v2_pokemontypes[0]['pokemon_id']) {
    x.pokemon_v2_pokemon.type = [types.pokemon_v2_pokemonsprites[x.id - 1].pokemon_v2_pokemon.pokemon_v2_pokemontypes]
    }
})
// console.log([types.pokemon_v2_pokemonsprites[0].pokemon_v2_pokemon.pokemon_v2_pokemontypes].length)

// console.log(pokedata[0])
// updatedPokeData.forEach(function (x) {
//     console.log(x.id)
//     console.log(types.pokemon_v2_pokemonsprites[x.id - 1].pokemon_v2_pokemon.pokemon_v2_pokemontypes[0]['pokemon_id'])
//     if (x.id == types.pokemon_v2_pokemonsprites[x.id - 1].pokemon_v2_pokemon.pokemon_v2_pokemontypes[0]['pokemon_id']) {
//         x.pokemon_v2_pokemon.type = [types.pokemon_v2_pokemonsprites[x.id - 1].pokemon_v2_pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type]
//     }
// })

console.log(updatedPokeData[0])

fs.writeFileSync("./pokedata.json", JSON.stringify(updatedPokeData, null), 'utf-8')