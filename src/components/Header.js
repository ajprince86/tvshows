import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/search">Show Search</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

export default Header;
