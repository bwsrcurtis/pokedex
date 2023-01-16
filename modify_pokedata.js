
import {pokedata} from "./pokemon_data.js";
import { pokedexDescriptions } from "./pokedexDescriptions.js";
import * as fs from 'fs';
let updatedPokeData = pokedata.data.gen3_species
let descriptions = pokedexDescriptions.data.pokemon_v2_pokemonspeciesflavortext

updatedPokeData.forEach(function (x) {
    x.imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x.id}.png`
    x.pokedexDescription = descriptions[x.id-1].flavor_text.replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, " ")
})

fs.writeFileSync("./pokedata.json", JSON.stringify(updatedPokeData, null), 'utf-8')