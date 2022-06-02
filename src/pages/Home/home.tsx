import HomeCard from '../../components/HomeCard';
import { IoIosArrowUp } from 'react-icons/io';
import * as C from './style';

function Home() {
  return ( 
  <C.Container>
    <div className='homeCardContainer'>
      <HomeCard />
      <div className="arrowIconContainer">
        <IoIosArrowUp />
      </div>
    </div>
  </C.Container>
);
}

export default Home;