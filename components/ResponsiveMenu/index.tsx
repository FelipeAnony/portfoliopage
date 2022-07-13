import { useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';

import * as C from './style';
import MenuLink from '../MenuLink';

function ResponsiveMenu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <C.Container menuIsOpen={menuIsOpen}>
      <div className="burguerMenuIcon">
        <AiOutlineMenu onClick={handleClick} />
      </div>
      <nav>
        <ul>
          <li>
            <MenuLink activeClass="active" href="hello" value="Home" />
          </li>
          <li>
            <MenuLink activeClass="active" href="summary" value="Curriculum" />
          </li>
          <li>
            <MenuLink activeClass="active" href="projects" value="Projects" />
          </li>
          <li>
            <MenuLink activeClass="active" href="contact" value="Contact" />
          </li>
        </ul>
      </nav>
    </C.Container>
  );
}

export default ResponsiveMenu;
