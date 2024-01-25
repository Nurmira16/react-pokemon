const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className="pokemonCard">
      {pokemon.sprites && (
        <img src={pokemon.sprites.other.dream_world.front_default}></img>
      )}

      <p>{pokemon.weight}</p>
    </div>
  );
};
export default Pokemon;
