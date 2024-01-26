const Pokemon = ({ pokemon }) => {
  // console.log("Pokemon data:", pokemon);
  if (!pokemon || !pokemon.name) {
    return <div>There is no pokemon</div>;
  }

  return (
    <div className="pokemonCard">
      <div className="characteristics">
        <p className="PokeTitle">{pokemon.name && pokemon.species.name}</p>
        <p className="PokeType">
          Type: <br />
          {pokemon.types && pokemon.types[0].type.name}
        </p>
        <p className="PokeId">weight:{pokemon.weight}</p>
        <p className="PokeId">attack:{pokemon.stats[0].base_stat}</p>
      </div>
      {pokemon.sprites && (
        <img
          className="pokeImage"
          src={pokemon.sprites.other.dream_world.front_default}
        ></img>
      )}

      <img className="pokeBall" src={require("./pokeBall.png")}></img>
    </div>
  );
};
export default Pokemon;
