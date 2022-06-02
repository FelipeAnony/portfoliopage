import { useEffect, useState } from "react";
import * as C from "./styles";

function HomeCard() {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisLoaded(true);
    }, 200)
  }, []);
  
  return (
    <C.Container isLoaded={isLoaded}>
      <div className="innerContainer">
        <div className="filterDiv">
          <div className="infoContainer">
            <div className="hello">
              Hello!
            </div>
            <div className="welcome">
              Welcome to my page
            </div>
            <button>Know more about me</button>
          </div>
        </div>
      </div>
    </C.Container>
  );
}

export default HomeCard;
