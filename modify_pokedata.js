import pokeData from './pokedata.json' assert { type: 'json' };
import * as fs from 'fs';
let updatedPokeData = pokeData

let types = []
let abilities = []
updatedPokeData.map((x, id) => {
    if (updatedPokeData[id].type) {
        for (let i = 0; i < updatedPokeData[id].type.length; i++) {

            types = [...types, (updatedPokeData[id].type[i].pokemon_v2_type.name)]

        }
    }
    x.type = types
    types = []
    if (updatedPokeData[id].abilities) {
        for (let i = 0; i < updatedPokeData[id].abilities.length; i++) {
            abilities = [...abilities, (updatedPokeData[id].abilities[i].pokemon_v2_ability.name)]

        }
    }
    x.abilities = abilities
    abilities = []
})

console.log(updatedPokeData[0])

fs.writeFileSync("./pokedata.json", JSON.stringify(updatedPokeData, null), 'utf-8')