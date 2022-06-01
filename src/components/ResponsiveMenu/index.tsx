import { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineMenu } from 'react-icons/ai';

import * as C from './style';

function ResponsiveMenu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  const handleClick = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return ( 
    <C.Container menuIsOpen={menuIsOpen}>
      <div 
        className='burguerMenuIcon'
        onClick={handleClick}
      >
        <AiOutlineMenu />
      </div>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to='/cv'>Curriculum</Link></li>
          <li><Link to={'/projects'}>Projects</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </C.Container>
  );
}

export default ResponsiveMenu;