import { NavLink } from "react-router-dom";


/** Nav button for dogs. */

function Nav({ name }) {
  return (
    <div>
      <NavLink to={`/dogs/${name}`}>{name}</NavLink>
    </div>
  );
}

export default Nav;
