import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100% - 20px);
  height: 80vh;
  margin: 0 auto;
  border: solid thin #333;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 100%;
  padding: 10px 0;
  color: white;

  .leftSideContainer,
  .rightSideContainer {
    display: flex;
    flex-direction: column;
    flex: 0;
    width: 100%;
    height: 100%;
  }

  .leftSideContainer {
    border-right: solid #333 thin;
  }
  .rightSideContainer {
  }

  .profileCard,
  .formation {
    width: calc(100% - 10px);
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px auto;
    min-height: 100px;
  }

  .contact,
  .techSkillsContainer,
  .softSkillsContainer {
    width: calc(100% - 10px);
    display: flex;
    align-items: center;
    margin: 10px auto;
    height: 100px;
  }

  .nameContainer {
    margin-right: auto;
    margin-left: 20px;
    .name {
      font-size: 26px;
    }
    .subtitle {
      font-size: 12px;
      color: #999;
    }
  }

  .imageContainer {
    width: 60px;
    height: 60px;
    border: solid thin #333;
    border-radius: 50%;
    margin-left: 10px;
  }

  .profileCard {
    border-bottom: solid thin #333;
    justify-content: flex-start;
  }

  .formation {
    flex-direction: column;
    font-size: 14px;
    align-items: flex-start;
    margin-left: 5%;

    ul {
      margin-left: 20px;
      font-size: 12px;
    }
  }
`;
