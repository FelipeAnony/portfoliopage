import Image from 'next/image';
import { useState, memo } from 'react';
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
    <section className={Styles.container}>
      <div className={Styles.imagesContainer}>
        <div className={Styles.mainImage}>
          <Image
            src={imagesList[selectedImg]}
            alt="Project print"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className={Styles.imagesRow}>
          {imagesList.map((e, key) => (
            <div
              key={key}
              id={`${key}`}
              className={`${selectedImg === key ? Styles.selected : ''} ${
                Styles.div
              }`}
              onClick={(e) => setSelectedImg(+e.currentTarget.id)}
            >
              <Image
                src={e}
                alt="Project print"
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={Styles.infoContainer}>
        <div className={Styles.title}>{title}</div>
        <div className={Styles.description}>
          <span className={Styles.techsUsed}>Technologies used:</span>
          <ul className={Styles.technologies}>
            {technologies.map((e, key) => (
              <li key={key}>{e}</li>
            ))}
          </ul>
          <span className={Styles.featuresTitle}>Features</span>
          <ul className={Styles.features}>
            {features.map((e, key) => (
              <li key={key}>{e}</li>
            ))}
          </ul>
        </div>
        <div className={Styles.actions}>
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

export default memo(IndividualProjectCard, () => true);
