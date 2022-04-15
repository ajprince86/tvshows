import { useState } from "react";
import { NavLink,useNavigate} from "react-router-dom";
import '../styles/header.css'
import tvhub from '../images/tvhub.jpg'

function Header() {
  const [query, setQuery] = useState('');
 const navigate = useNavigate();
  return (
    <div className="header-div">
      <div>
        <h1 className="h1-header" onClick={()=>navigate("/")}>TV HUB</h1>
        {/* <img className = "logo-header" onClick={()=>navigate("/")} src={tvhub}/> */}
      </div>
      <div className="search-div">
        <input className="txt-search" type="text" onChange={(e) => setQuery(e.target.value)}/>
        <p className = "p-search" onClick={(e) => navigate(`/search/${query}`)}>&#128269;</p>
      </div> 
      <div className="nav-div">
        <nav className="header-nav">
          <NavLink to="/">Home</NavLink>
          {/* start - original code */}
          {/* <NavLink to="/search">Search</NavLink> */}
          {/* end - original code */}
          <NavLink to="/about">About</NavLink>
        </nav>
        </div>
    </div>
  );
}

export default Header;
