import * as C from './style';

function Curriculum() {
  return (
    <C.Container>
      <div className="leftSideContainer">
        <div className="profileCard">
          <div className="imageContainer"></div>
          <div className="nameContainer">
            <div className="name">Felipe M. Oliveira</div>
            <div className="subtitle">Front-end developer</div>
          </div>
        </div>
        <div className="formation">
          <b>Front-end Developer, B7web | 10/21 - 03/22</b>
          <p>Conhecimentos</p>
          <ul>
            <li>Html5</li>
            <li>Css3</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.Js</li>
            <li>Git</li>
            <li>SASS - SCSS</li>
            <li>Styled-Components</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
      <div className="rightSideContainer">
        <div className="contact"></div>
        <div className="techSkillsContainer"></div>
        <div className="softSkillsContainer"></div>
      </div>
    </C.Container>
  );
}

export default Curriculum;
