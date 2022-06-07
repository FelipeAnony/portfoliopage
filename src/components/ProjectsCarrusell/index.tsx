import IndividualProjectCard from '../IndividualProjectCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import * as C from './styles';

function ProjectsCarrusell() {
  return (
    <C.Container>
      <div className="arrowLeft">
        <IoIosArrowBack className="icon" />
      </div>
      <div className="itensContainer">
        <IndividualProjectCard />
      </div>
      <div className="arrowRight">
        <IoIosArrowForward className="icon" />
      </div>
    </C.Container>
  );
}

export default ProjectsCarrusell;
