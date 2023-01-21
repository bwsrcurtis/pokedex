const PokeDesc = ({ pokeArr, selectedPokemon }) => {
    return (
        <div className={`pokemon-desc-div ${pokeArr[selectedPokemon].type[0]}`}>
            <h1>Pokedex Description</h1>
            <h3>{pokeArr[selectedPokemon].pokedexDescription}</h3>
        </div>
    );
};

export default PokeDesc;