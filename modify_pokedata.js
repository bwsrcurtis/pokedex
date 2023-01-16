import pokeData from './pokedata.json' assert { type: 'json' };
import * as fs from 'fs';
let updatedPokeData = pokeData


updatedPokeData.map((x) => {
    // console.log(x)
    x.name = x.pokemon_v2_pokemon.name
    x.base_experience = x.pokemon_v2_pokemon.base_experience
    x.height = x.pokemon_v2_pokemon.height
    x.weight = x.pokemon_v2_pokemon.weight
    x.is_default = x.pokemon_v2_pokemon.is_default
    x.abilities = x.pokemon_v2_pokemon.pokemon_v2_pokemonabilities
    x.type = x.pokemon_v2_pokemon.type
})
updatedPokeData.forEach((e) => {
    delete e.pokemon_v2_pokemon
})

console.log(updatedPokeData[0])

fs.writeFileSync("./pokedata.json", JSON.stringify(updatedPokeData, null), 'utf-8')