import { action } from "../services/constants.js";
import { useNavigate } from "react-router-dom";

const Action = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="h2-staffPicks">Time for some action</h2>
      <div className="container-staffpicks">
        {action.map((show, key) => {
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

export default Action;
