import { useState } from 'react';
import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai';
import { MainButton } from '../Template/styles';
import * as C from './styles';

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
    <C.Container>
      <div className="imagesContainer">
        <div className="mainImage">
          <img src={imagesList[selectedImg]} alt="Project print" />
        </div>
        <div className="imagesRow">
          <div>
            <img src={imagesList[0]} alt="Project print" />
          </div>
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
          <MainButton BgColor={'darkgrey'} Disabled={gitLink ? false : true}>
            <AiFillGithub />
            <a onClick={(e) => !gitLink && e.preventDefault()} href={gitLink}>
              See in Github
            </a>
          </MainButton>
          <MainButton BgColor={'#FF2D00'} Disabled={tryLink ? false : true}>
            <a onClick={(e) => !tryLink && e.preventDefault()} href={tryLink}>
              Try Out now!{' '}
            </a>
            <AiOutlineArrowRight />
          </MainButton>
        </div>
      </div>
    </C.Container>
  );
}

export default IndividualProjectCard;
