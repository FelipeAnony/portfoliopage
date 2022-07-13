import { useEffect, useState } from 'react';

import * as C from './styles';

import { MainButton } from '../Template/styles';
import MenuLink from '../MenuLink';

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
              <MenuLink
                activeClass="active"
                href="summary"
                value="know more about me"
              />
            </MainButton>
          </div>
        </div>
      </div>
    </C.Container>
  );
}

export default HomeCard;
