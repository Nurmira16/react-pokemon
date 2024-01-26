import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink to={"/pokemons"}>Pokemons</NavLink>
      <Link>About</Link>
    </div>
  );
};
export default Sidebar;
