import { useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { MainButton } from '../Template/styles';
import * as C from './styles';

function HomeCard() {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisLoaded(true);
    }, 200);
  }, []);

  return (
    <C.Container isLoaded={isLoaded}>
      <div className="innerContainer">
        <div className="filterDiv">
          <div className="infoContainer">
            <div id="hello" className="hello">
              Hello!
            </div>
            <div className="welcome">Welcome to my page</div>
            <MainButton BgColor="#FF2D00">
              <Link
                activeClass="active"
                to="summary"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
              >
                know more about me
              </Link>
            </MainButton>
          </div>
        </div>
      </div>
    </C.Container>
  );
}

export default HomeCard;
