import React, { useState, useRef } from 'react';

import Styles from './styles.module.css';

import { getProjectsList } from '../../helpers/API'; // fonte de dados pro render

import IndividualProjectCard from '../IndividualProjectCard'; //importacao Do Card Interno
import { debounce } from '../../helpers/debounceHelper';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function ProjectsCarrusell() {
  const [selectedIten, setSelectedIten] = useState(0);

  const projectsList = getProjectsList();

  const containerRef = useRef<HTMLElement>(null);

  const valueToScroll = (): number => {
    const screenWidthSize = window.innerWidth;

    if (screenWidthSize > 1055) return 950;
    else return screenWidthSize * 0.9;
  };

  const handleClickLeft = () => {
    containerRef.current?.scrollTo(
      containerRef.current.scrollLeft - valueToScroll(),
      0
    );
  };

  const handleClickRight = () => {
    containerRef.current?.scrollTo(
      containerRef.current.scrollLeft + valueToScroll(),
      0
    );
  };

  const handlePaginatorClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    containerRef.current?.scrollTo(valueToScroll() * +e.currentTarget.id, 0);
    setSelectedIten(+e.currentTarget.id);
  };

  const handlerScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    const updateCounter = () => {
      containerRef.current &&
        setSelectedIten(
          parseInt(
            (containerRef.current.scrollLeft / valueToScroll()).toString()
          )
        );
    };

    debounce(updateCounter, 200);
  };

  return (
    <>
      <article
        ref={containerRef}
        className={Styles.container}
        onScroll={handlerScroll}
      >
        <div className={Styles.arrowLeft} onClick={handleClickLeft}>
          <IoIosArrowBack className={Styles.icon} />
        </div>
        <div className={Styles.itensContainer}>
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
        <div className={Styles.arrowRight} onClick={handleClickRight}>
          <IoIosArrowForward className={Styles.icon} />
        </div>
      </article>
      <div className={Styles.itensCounter}>
        {projectsList.map((e, key) => (
          <div
            key={key}
            onClick={(e) => handlePaginatorClick(e)}
            id={`${key}`}
            className={`${Styles.itensCounter__iten} ${
              selectedIten === key ? Styles.selected : ''
            }`}
          ></div>
        ))}
      </div>
    </>
  );
}

export default ProjectsCarrusell;
