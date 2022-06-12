import { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import * as C from './styles';

import { getProjectsList } from '../../helpers/API'; // fonte de dados pro render

import IndividualProjectCard from '../IndividualProjectCard'; //importacao Do Card Interno

function ProjectsCarrusell() {
  const [marginValue, setMarginValue] = useState(0);
  const [selectedIten, setSelectedIten] = useState(0);

  const projectsList = getProjectsList();

  const handleClickRight = () => {
    if (projectsList.length === selectedIten + 1) return;
    if (window.innerWidth < 1055.55) {
      setMarginValue(marginValue - window.innerWidth * 0.9 - 10);
    } else {
      setMarginValue(marginValue - 950 - 10);
    }
    setSelectedIten(selectedIten + 1);
  };

  const handleClickLeft = () => {
    if (marginValue >= 0) return;
    if (window.innerWidth < 1055.55) {
      setMarginValue(marginValue + window.innerWidth * 0.9 + 10);
    } else {
      setMarginValue(marginValue + 950 + 10);
    }
    setSelectedIten(selectedIten - 1);
  };

  const handlePaginatorClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setSelectedIten(+e.currentTarget.id);
  };

  useEffect(() => {
    const moveRowListToSelection = () => {
      if (selectedIten === 0) {
        setMarginValue(0);
      } else {
        if (window.innerWidth < 1055.55) {
          setMarginValue((window.innerWidth * 0.9 - 10) * -selectedIten);
        } else {
          setMarginValue((950 - 10) * -selectedIten);
        }
      }
    };

    window.addEventListener('resize', moveRowListToSelection);

    return () => window.removeEventListener('resize', moveRowListToSelection);
  }, [selectedIten]);

  useEffect(() => {
    const moveRowListToSelection = () => {
      if (selectedIten === 0) {
        setMarginValue(0);
      } else {
        if (window.innerWidth < 1055.55) {
          setMarginValue((window.innerWidth * 0.9 - 10) * -selectedIten);
        } else {
          setMarginValue((950 - 10) * -selectedIten);
        }
      }
    };

    moveRowListToSelection();
  }, [selectedIten]);

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
      <div className="itensCounter">
        {projectsList.map((e, key) => (
          <div
            key={key}
            onClick={(e) => handlePaginatorClick(e)}
            id={`${key}`}
            className={`itensCounter__iten ${
              selectedIten === key ? 'selected' : ''
            }`}
          ></div>
        ))}
      </div>
    </C.Container>
  );
}

export default ProjectsCarrusell;
