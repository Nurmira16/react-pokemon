const Card = ({ poke }) => {
  return (
    <div className="card">
      <img src={poke.data.sprites.other.dream_world.front_default}></img>
      <p>{poke.data.height}</p>
    </div>
  );
};
export default Card;
