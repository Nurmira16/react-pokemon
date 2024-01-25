const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className="pokemonCard">
      <div className="characteristics">
        <p className="PokeTitle">{pokemon.name && pokemon.species.name}</p>
        <p>
          Type:<br></br>
          {pokemon.types && pokemon.types[0].type.name}
        </p>
        <p>{pokemon.id}</p>
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
