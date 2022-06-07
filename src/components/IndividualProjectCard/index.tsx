import { AiFillGithub, AiOutlineArrowRight } from 'react-icons/ai';
import { MainButton } from '../Template/styles';
import * as C from './styles';
import print from '../../images/print.png';

function IndividualProjectCard() {
  return (
    <C.Container>
      <div className="imagesContainer">
        <div className="mainImage">
          <img src={print} alt="Project print" />
        </div>
        <div className="imagesRow">
          <div>
            <img src={print} alt="Project print" />
          </div>
          <div>
            <img src={print} alt="Project print" />
          </div>
          <div>
            <img src={print} alt="Project print" />
          </div>
          <div>
            <img src={print} alt="Project print" />
          </div>
          <div>
            <img src={print} alt="Project print" />
          </div>
          <div>
            <img src={print} alt="Project print" />
          </div>
          <div>
            <img src={print} alt="Project print" />
          </div>
        </div>
      </div>
      <div className="infoContainer">
        <div className="title">Chatter.io: realtime chat</div>
        <div className="description">
          <span className="span1">Technologies used:</span>
          <ul className="technologies">
            <li>HTML5, CSS3 and Javascript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Styled-Components</li>
            <li>Firebase</li>
          </ul>
          <span className="span2">Features</span>
          <ul className="features">
            <li>Real-time chat</li>
            <li>Themes for choose</li>
            <li>Works on all devices and screens</li>
          </ul>
        </div>
        <div className="actions">
          <MainButton BgColor={'darkgrey'}>
            <AiFillGithub />
            <a href="/">See in Github</a>
          </MainButton>
          <MainButton BgColor={'#FF2D00'}>
            <a href="/">Try Out now! </a>
            <AiOutlineArrowRight />
          </MainButton>
        </div>
      </div>
    </C.Container>
  );
}

export default IndividualProjectCard;
