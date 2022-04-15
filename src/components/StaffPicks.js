import { favoriteLists } from "../services/constants.js";
import { useNavigate } from "react-router-dom";
// import '../styles/home.css'

const StaffPicks = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="h2-staffPicks">
        Our <span className="span-r">MUST</span> watch list
      </h2>
      <div className="container-staffpicks">
        {favoriteLists.map((show, key) => {
          return (
            <div className="show">
              <img
                id={show.id}
                className="home-img"
                src={show.img}
                key={key}
                alt="show-title"
                onClick={() => navigate(`/search/show/${show.id}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StaffPicks;
