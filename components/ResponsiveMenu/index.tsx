import { useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';

import Styles from './styles.module.css';

import MenuLink from '../MenuLink';

function ResponsiveMenu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.burguerMenuIcon}>
        <AiOutlineMenu onClick={handleClick} />
      </div>
      <nav className={`${Styles.nav} ${menuIsOpen ? Styles.open : ''}`}>
        <ul>
          <li className={Styles.li}>
            <MenuLink activeClass="active" href="hello" value="Home" />
          </li>
          <li className={Styles.li}>
            <MenuLink activeClass="active" href="summary" value="Summary" />
          </li>
          <li className={Styles.li}>
            <MenuLink activeClass="active" href="projects" value="Projects" />
          </li>
          <li className={Styles.li}>
            <MenuLink activeClass="active" href="contact" value="Contact" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ResponsiveMenu;
