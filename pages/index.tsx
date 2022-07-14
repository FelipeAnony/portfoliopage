import type { NextPage } from 'next';

import { IoIosArrowUp } from 'react-icons/io';
import { GrDocumentPdf } from 'react-icons/gr';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import HomeCard from '../components/HomeCard';
import ProjectsCarrusell from '../components/ProjectsCarrusell';

import ContactForm from '../components/ContactForm';
import MainButton from '../components/MainButton';

import Styles from '../styles/homeStyle.module.css';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  return (
    <>
      <div className={Styles.homeCardContainer}>
        <HomeCard />
        <div className={Styles.arrowIconContainer}>
          <IoIosArrowUp />
        </div>
      </div>
      <div className={Styles.summary}>
        <h3 id="summary">Summary</h3>
        <p className={Styles.text}>
          {`Hi! My name is Felipe, I'm 21 years old and I've been a front-end
            developer since 2021. I describe myself as an optimistic person, who
            works well in a team and is eager to learn new things. I'm extremely
            hardworking and dedicated and I want to get as high as possible. My
            philosophy of life is that a life is good when you are the best you
            can be.`}
        </p>
        <p className={Styles.text}>
          I am currently based in Spain and I am looking for a job, preferably
          remote. My top 3 stacks are Javascript (TypeScript), React.js and
          Styled-components. My native language is Portuguese, but I have a
          fluent level of Spanish and an intermediate level of English.
        </p>
        <MainButton className={Styles.btn} bgColor="#aaa">
          <a
            href={
              'https://docs.google.com/document/d/e/2PACX-1vR8qpvBPO5JBxZuoOcZdJ8smhCLqqSR8KzMsmN2jT9es4OrVE4fqXVJQYxrtCAYtllHfFos0wpHxKdj/pub'
            }
            target="_blank"
            rel="noreferrer"
            className={Styles.link}
          >
            <GrDocumentPdf className={`${Styles.icon} ${Styles.pdfIcon}`} />
            See My Curriculum
          </a>
        </MainButton>
        <MainButton className={Styles.btn} bgColor={'darkgrey'}>
          <a
            href={'https://www.github.com/felipeanony'}
            target="_blank"
            rel="noreferrer"
            className={Styles.link}
          >
            <AiFillGithub className={Styles.icon} />
            See in Github
          </a>
        </MainButton>
        <MainButton className={Styles.btn} bgColor={'#0072b1'}>
          <a
            href={
              'https://www.linkedin.com/in/felipe-mendonca-de-o-melo-b30732221/'
            }
            target="_blank"
            rel="noreferrer"
            className={Styles.link}
          >
            <AiFillLinkedin className={Styles.icon} />
            See in Linkedin
          </a>
        </MainButton>
      </div>
      <div className={Styles.carrousellTitle}>
        <h3 id="projects">Main Projects</h3>
      </div>
      <ProjectsCarrusell />
      <ContactForm />
    </>
  );
};

export default Home;
