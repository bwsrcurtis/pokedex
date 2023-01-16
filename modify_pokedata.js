import pokedata from './pokedata.json' assert { type: 'json' };
// import * as fs from 'fs';
let updatedPokeData = pokedata


updatedPokeData = updatedPokeData.map((x) => {
    x.base_experience = x.pokemon_v2_pokemon.base_experience
})

console.log(updatedPokeData[0])

// fs.writeFileSync("./pokedata.json", JSON.stringify(updatedPokeData, null), 'utf-8')