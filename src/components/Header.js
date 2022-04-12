import { NavLink,useNavigate} from "react-router-dom";
import '../styles/header.css'


function Header() {
 const navigate = useNavigate();
  return (
    <div className="header-div">
      <h1 onClick={()=>navigate("/")}>TV HUB</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
}

export default Header;
