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
          <h3>Formation</h3>
          <div className="formation-title">
            <strong>Front-end Developer</strong> - B7web | 10/21 - 03/22
          </div>
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
          <div className="formation-title">
            <strong>Back-end Developer</strong> - B7web | 06/22 - ongoing
          </div>
          <ul>
            <li>Node.Js</li>
            <li>Express</li>
            <li>SQL and NoSQL DB's</li>
            <li>API's REST</li>
            <li>Adonis.Js</li>
            <li>PHP</li>
            <li>Laravel</li>
            <li>Docker</li>
            <li>TDD</li>
            <li>GraphQl</li>
          </ul>
        </div>
      </div>
      <div className="rightSideContainer">
        <div className="contact">
          <strong>Contact</strong>
          <ul>
            <li>felipemom2001@gmail.com</li>
            <li>
              <a
                href="https://www.github.com/felipeanony"
                target={'_blank'}
                rel="noreferrer"
              >
                github.com/felipeAnony
              </a>
            </li>
            <li>Ourense, Galicia, Spain</li>
          </ul>
        </div>
        <div className="techSkillsContainer">
          <strong>Tech Skills</strong>
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
            <li>Node.js</li>
          </ul>
        </div>
        <div className="softSkillsContainer">
          <strong>Aptitudes</strong>
          <ul>
            <li>Team Work</li>
            <li>Self-taugh</li>
            <li>Optimism</li>
            <li>Pasion for solve problems</li>
            <li>fast learnig</li>
          </ul>
        </div>
      </div>
    </C.Container>
  );
}

export default Curriculum;
