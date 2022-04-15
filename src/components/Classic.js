import { classic } from "../services/constants.js";
import { useNavigate } from "react-router-dom";

const Classic = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="h2-staffPicks">
        Search the <h4 style={{color: "red",marginLeft:"5px", marginRight: "5px"}}>OLDIES</h4>
      </h2>
      <div className="container-staffpicks">
        {classic.map((show, key) => {
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

export default Classic;
