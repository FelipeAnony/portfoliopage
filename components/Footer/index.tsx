import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import Styles from './styles.module.css';

function Footer() {
  return (
    <div className={Styles.container}>
      Developed by Felipe M. Oliveira
      <div className={Styles.innerContainer}>
        <a
          href="https://www.github.com/felipeanony"
          target="_blank"
          rel="noreferrer"
          className={Styles.link}
        >
          <AiFillGithub />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/felipe-mendonca-de-o-melo-b30732221/"
          target="_blank"
          rel="noreferrer"
          className={Styles.link}
        >
          <AiFillLinkedin />
          Linkedin
        </a>
      </div>
    </div>
  );
}

export default Footer;
