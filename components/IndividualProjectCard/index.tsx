import Image from 'next/image';
import { useState } from 'react';
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai';
import MainButton from '../MainButton';

import Styles from './styles.module.css';

type Props = {
  title: string;
  imagesList: string[];
  technologies: string[];
  features: string[];
  gitLink: string;
  tryLink: string;
};

function IndividualProjectCard({
  title,
  imagesList,
  technologies,
  features,
  gitLink,
  tryLink,
}: Props) {
  const [selectedImg, setSelectedImg] = useState(0);

  return (
    <section className={Styles.ontainer}>
      <div className="imagesContainer">
        <div className="mainImage">
          <img src={imagesList[selectedImg]} alt="Project print" />
        </div>
        <div className="imagesRow">
          {imagesList.map((e, key) => (
            <div
              key={key}
              id={`${key}`}
              className={`${selectedImg === key ? 'selected' : ''}`}
              onClick={(e) => setSelectedImg(+e.currentTarget.id)}
            >
              <img src={e} alt="Project print" />
            </div>
          ))}
        </div>
      </div>
      <div className="infoContainer">
        <div className="title">{title}</div>
        <div className="description">
          <span className="span1">Technologies used:</span>
          <ul className="technologies">
            {technologies.map((e, key) => (
              <li key={key}>{e}</li>
            ))}
          </ul>
          <span className="span2">Features</span>
          <ul className="features">
            {features.map((e, key) => (
              <li key={key}>{e}</li>
            ))}
          </ul>
        </div>
        <div className="actions">
          <MainButton bgColor={'darkgrey'} disabled={gitLink ? false : true}>
            <>
              <AiFillGithub />
              <a
                onClick={(e) => !gitLink && e.preventDefault()}
                href={gitLink}
                target="_blank"
                rel="noreferrer"
              >
                See in Github
              </a>
            </>
          </MainButton>
          <MainButton bgColor={'#FF2D00'} disabled={tryLink ? false : true}>
            <>
              <a
                onClick={(e) => !tryLink && e.preventDefault()}
                href={tryLink}
                target="_blank"
                rel="noreferrer"
              >
                Try Out now!{' '}
              </a>
              <AiOutlineArrowRight />
            </>
          </MainButton>
        </div>
      </div>
    </section>
  );
}

export default IndividualProjectCard;
