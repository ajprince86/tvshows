import { NavLink } from "react-router-dom";
import '../styles/header.css'

function Header() {
  return (
    <div className="header-div">
      <h1>TV HUB</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
}

export default Header;
