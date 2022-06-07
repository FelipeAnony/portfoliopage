import HomeCard from '../../components/HomeCard';
import { IoIosArrowUp } from 'react-icons/io';
import * as C from './style';
import Curriculum from '../../components/Curriculum';
import ProjectsCarrusell from '../../components/ProjectsCarrusell';

function Home() {
  return (
    <C.Container>
      <div className="homeCardContainer">
        <HomeCard />
        <div className="arrowIconContainer">
          <IoIosArrowUp />
        </div>
      </div>
      <ProjectsCarrusell />
      {/* <div className="curriculumContainer">
        <Curriculum />
      </div> */}
    </C.Container>
  );
}

export default Home;
