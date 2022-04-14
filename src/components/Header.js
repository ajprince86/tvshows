import { useState } from "react";
import { NavLink,useNavigate} from "react-router-dom";
import '../styles/header.css'

function Header() {
  const [query, setQuery] = useState('');
 const navigate = useNavigate();
  return (
    <div className="header-div">
      <h1 className="h1-header" onClick={()=>navigate("/")}>TV HUB</h1>
      <input type="text" onChange={(e) => setQuery(e.target.value)}/>
      <button className = "btn-search" onClick={(e) => navigate(`/search/${query}`)}>&#128269;</button>
        <nav className="header-nav">
          <NavLink to="/">Home</NavLink>
          {/* start - original code */}
          {/* <NavLink to="/search">Search</NavLink> */}
          {/* end - original code */}
          <NavLink to="/about">About</NavLink>
        </nav>
    </div>
  );
}

export default Header;
