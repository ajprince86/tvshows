import { romance } from "../services/constants.js";
import { useNavigate } from "react-router-dom";

const Romance = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="h2-staffPicks">Love <span className="span-r">&#9829;</span>Shows</h2>
      <div className="container-staffpicks">
        {romance.map((show, key) => {
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

export default Romance;
