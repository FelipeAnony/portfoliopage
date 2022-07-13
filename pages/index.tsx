import type { NextPage } from 'next';
import Head from 'next/head';

import { IoIosArrowUp } from 'react-icons/io';
import { GrDocumentPdf } from 'react-icons/gr';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import HomeCard from '../components/HomeCard';
import ProjectsCarrusell from '../components/ProjectsCarrusell';

import ContactForm from '../components/ContactForm';
import Script from 'next/script';
import MainButton from '../components/MainButton';

import Styles from '../styles/homeStyle.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <title>Felipe M. Oliveira | Front-end Developer</title>
        <meta name="title" content="Felipe M. Oliveira | Front-end Developer" />
        <meta
          name="description"
          content="Hi! My name is Felipe,  I've been a front-end developer since 2021. I describe myself as an optimistic person,  eager to learn new things. I'm extremely hardworking and dedicated. My philosophy of life is that a life is good when you are the best you can be."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Felipe M. Oliveira | Front-end Developer"
        />
        <meta
          property="og:description"
          content="Hi! My name is Felipe,  I've been a front-end developer since 2021. I describe myself as an optimistic person,  eager to learn new things. I'm extremely hardworking and dedicated. My philosophy of life is that a life is good when you are the best you can be."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Felipe M. Oliveira | Front-end Developer"
        />
        <meta
          property="twitter:description"
          content="Hi! My name is Felipe,  I've been a front-end developer since 2021. I describe myself as an optimistic person,  eager to learn new things. I'm extremely hardworking and dedicated. My philosophy of life is that a life is good when you are the best you can be."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
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
            I am currently based in Galicia, Spain and I am looking for a job,
            preferably remote. My top 3 stacks are Javascript (TypeScript),
            React.js and Styled-components. My native language is Portuguese,
            but I have a fluent level of Spanish and an intermediate level of
            English.
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
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-9BZBJTCF2C"
        strategy="afterInteractive"
      />
      <Script id="analitcs" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag(){
            dataLayer.push(arguments);
          }

          gtag('js', new Date());
          gtag('config', 'G-9BZBJTCF2C');
          `}
      </Script>
    </>
  );
};

export default Home;
