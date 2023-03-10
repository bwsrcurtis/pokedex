const PokeImage = ({ pokeArr, selectedPokemon, active, triggerFade }) => {


    return (
        <div className='image-div'>
            <div className='image-bg'></div>
            <img onAnimationEnd={triggerFade} className={`poke-img ${active ? 'active' : 'finished'}`} src={pokeArr[selectedPokemon].imgURL} alt={pokeArr[selectedPokemon].name}></img>
        </div>
    );
};

export default PokeImage;