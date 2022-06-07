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

  @media (max-width: 450px) {
    .contact,
    .techSkillsContainer,
    .softSkillsContainer {
      ul {
        margin-left: -5px;
      }
      li {
        font-size: 8px;
      }
    }
  }

  ul {
    color: #ddd;
  }

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

    .profileCard {
      border-bottom: solid thin #333;
      justify-content: flex-start;

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
    }

    .formation {
      flex-direction: column;
      font-size: 14px;
      align-items: flex-start;
      margin-left: 5%;

      ul {
        margin-left: 20px;
        font-size: 11px;
      }

      .formation-title {
        margin: 10px 0 5px;
        color: #999;
        font-size: 11px;

        strong {
          color: white;
          font-size: 14px;
        }
      }
    }
  }

  .rightSideContainer {
    .contact,
    .techSkillsContainer,
    .softSkillsContainer {
      flex-direction: column;
      width: calc(100% - 10px);
      display: flex;
      align-items: flex-start;
      margin: 10px auto;
      min-height: 50px;
    }

    ul {
      font-size: 10px;
      list-style: none;

      li {
        margin: 3px 0 0 5px;
      }
    }

    .contact {
      align-items: flex-start;
      padding: 10px 0;
      margin-top: 35px;

      a {
        color: inherit;
      }
    }

    .techSkillsContainer {
    }

    .softSkillsContainer {
    }
  }
`;
