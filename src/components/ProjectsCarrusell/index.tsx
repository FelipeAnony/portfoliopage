import IndividualProjectCard from '../IndividualProjectCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import * as C from './styles';
import { getProjectsList } from '../../helpers/API';
import { useEffect, useState } from 'react';

function ProjectsCarrusell() {
  const [marginValue, setMarginValue] = useState(0);

  const projectsList = getProjectsList();

  const handleClickRight = () => {
    if (window.innerWidth < 1055.55) {
      if (marginValue <= -(projectsList.length - 1) * (window.innerWidth * 0.9))
        return;
      setMarginValue(marginValue - window.innerWidth * 0.9 - 10);
    } else {
      if (marginValue <= -(projectsList.length - 1) * 950) return;
      setMarginValue(marginValue - 950 - 10);
    }
  };

  const handleClickLeft = () => {
    if (marginValue >= 0) return;
    if (window.innerWidth < 1055.55) {
      setMarginValue(marginValue + window.innerWidth * 0.9 + 10);
    } else {
      setMarginValue(marginValue + 950 + 10);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      setMarginValue(0);

      //solucao perfeita: criar um state que armazena qual
      //elemento esta em 'focus' e usar esse valor * innerWidht
      // pra corrigir quando resize for chamado, assim corrigindo
      //exatamente pro tamanho certo e nao pro 0
    });
  }, []);

  return (
    <C.Container itens={projectsList.length} marginValue={marginValue}>
      <div className="arrowLeft" onClick={handleClickLeft}>
        <IoIosArrowBack className="icon" />
      </div>
      <div className="itensContainer">
        {projectsList.map((e, key) => (
          <IndividualProjectCard
            title={e.title}
            imagesList={e.imagesList}
            technologies={e.technologies}
            features={e.features}
            gitLink={e.gitLink}
            tryLink={e.tryLink}
            key={key}
          />
        ))}
      </div>
      <div className="arrowRight" onClick={handleClickRight}>
        <IoIosArrowForward className="icon" />
      </div>
    </C.Container>
  );
}

export default ProjectsCarrusell;
