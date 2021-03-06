import { heroes } from "../services/constants.js";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="h2-staffPicks">
        We need a <h4 style={{color: "red",marginLeft:"5px", marginRight: "5px"}}>HERO!</h4>
      </h2>
      <div className="container-staffpicks">
        {heroes.map((show, key) => {
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

export default Hero;
