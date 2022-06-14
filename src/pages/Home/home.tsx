import { IoIosArrowUp } from 'react-icons/io';
import { GrDocumentPdf } from 'react-icons/gr';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import * as C from './style';

import HomeCard from '../../components/HomeCard';
import ProjectsCarrusell from '../../components/ProjectsCarrusell';
import { MainButton } from '../../components/Template/styles';
import ContactForm from '../../components/ContactForm';

function Home() {
  return (
    <C.Container>
      <div className="homeCardContainer">
        <HomeCard />
        <div className="arrowIconContainer">
          <IoIosArrowUp />
        </div>
      </div>
      <div className="summary">
        <h3 id="summary">Summary</h3>
        <p>
          Hi! My name is Felipe, I'm 21 years old and I've been a front-end
          developer since 2021. I describe myself as an optimistic person, who
          works well in a team and is eager to learn new things. I'm extremely
          hardworking and dedicated and I want to get as high as possible. My
          philosophy of life is that a life is good when you are the best you
          can be.
        </p>
        <p>
          I am currently based in Galicia, Spain and I am looking for a job,
          preferably remote. My top 3 stacks are Javascript (TypeScript),
          React.js and Styled-components. My native language is Portuguese, but
          I have a fluent level of Spanish and an intermediate level of English.
        </p>
        <MainButton id="cv" className="downloadButton" BgColor="#aaa">
          <a
            href={
              'https://docs.google.com/document/d/e/2PACX-1vR8qpvBPO5JBxZuoOcZdJ8smhCLqqSR8KzMsmN2jT9es4OrVE4fqXVJQYxrtCAYtllHfFos0wpHxKdj/pub'
            }
            target="_blank"
            rel="noreferrer"
          >
            <GrDocumentPdf />
            See My Curriculum
          </a>
        </MainButton>
        <MainButton BgColor={'darkgrey'}>
          <a
            href={'https://www.github.com/felipeanony'}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
            See in Github
          </a>
        </MainButton>
        <MainButton BgColor={'#0072b1'}>
          <a
            href={
              'https://www.linkedin.com/in/felipe-mendonca-de-o-melo-b30732221/'
            }
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
            See in Linkedin
          </a>
        </MainButton>
      </div>
      <div className="carrousellTitle">
        <h3>Main Projects</h3>
      </div>
      <ProjectsCarrusell />
      <ContactForm />
    </C.Container>
  );
}

export default Home;
