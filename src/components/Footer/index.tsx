import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import * as C from './styles';

function Footer() {
  return (
    <C.Container>
      Developed by Felipe M. Oliveira
      <div>
        <a
          href="https://www.github.com/felipeanony"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/felipe-mendonca-de-o-melo-b30732221/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
          Linkedin
        </a>
      </div>
    </C.Container>
  );
}

export default Footer;
