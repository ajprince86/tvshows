import { favoriteLists } from "../services/constants.js";
import { useNavigate } from "react-router-dom";

const StaffPicks = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 style={{ color: "red" }}>The Staff Must Watch List</h2>
      <div className="container">
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
