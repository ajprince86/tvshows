import { romance } from "../services/constants.js";
import { useNavigate } from "react-router-dom";

const Romance = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Love &#9829; Shows</h2>
      <div className="container">
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
