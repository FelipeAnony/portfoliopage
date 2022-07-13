import { useEffect, useState } from 'react';
import MainButton from '../MainButton';
import MenuLink from '../MenuLink';

import Styles from './styles.module.css';

function HomeCard() {
  const [isLoaded, setisLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisLoaded(true);
    }, 200);
  }, []);

  return (
    <section className={Styles.container}>
      <div className={Styles.innerContainer}>
        <div className={Styles.filterDiv}>
          <div className={Styles.infoContainer}>
            <div id="hello" className={Styles.hello}>
              Hello!
            </div>
            <div className={Styles.welcome}>Welcome to my page</div>
            <MainButton className={Styles.button} bgColor="#FF2D00">
              <MenuLink
                activeClass="active"
                href="summary"
                value="know more about me"
              />
            </MainButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCard;
