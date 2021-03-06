import { romance } from "../services/constants.js";
import { useNavigate } from "react-router-dom";

const Romance = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="h2-staffPicks">Love <h4 style={{color: "red",marginLeft:"5px", marginRight: "5px"}}>&#9829;</h4>Shows</h2>
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
