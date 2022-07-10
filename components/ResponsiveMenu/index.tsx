import { useState } from 'react';
import { Link } from 'react-scroll';

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
            <Link
              activeClass="active"
              to="hello"
              spy={true}
              smooth={true}
              duration={500}
              offset={-300}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="summary"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              Curriculum
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </C.Container>
  );
}

export default ResponsiveMenu;
