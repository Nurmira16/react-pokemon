const Pokemon = ({ pokemon }) => {
  if (!pokemon.hasOwnProperty("name")) return <div>There is no property</div>;

  return (
    <div className="pokemonCard">
      <div className="characteristics">
        <p className="PokeTitle">{pokemon.name && pokemon.species.name}</p>
        <p className="PokeType">
          Type: <br />
          {pokemon.types && pokemon.types[0].type.name}
        </p>
        <p className="PokeId">{pokemon.weight}</p>
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
