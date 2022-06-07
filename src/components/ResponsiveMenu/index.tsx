import { useState } from 'react';

import { AiOutlineMenu } from 'react-icons/ai';

import * as C from './style';

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
            <a href={'/'}>Home</a>
          </li>
          <li>
            <a href="/cv">Curriculum</a>
          </li>
          <li>
            <a href={'/projects'}>Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </C.Container>
  );
}

export default ResponsiveMenu;
