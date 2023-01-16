import pokedata from './pokedata.json' assert { type: 'json' };


console.log(pokedata[0])
// updatedPokeData.forEach(function (x) {
//     x.imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x.id}.png`
//     x.pokedexDescription = descriptions[x.id-1].flavor_text.replace(/[\r\n\x0B\x0C\u0085\u2028\u2029]+/g, " ")
// })

// fs.writeFileSync("./pokedata.json", JSON.stringify(updatedPokeData, null), 'utf-8')