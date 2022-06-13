import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  .homeCardContainer {
    width: 100%;
    height: 90vh;
    background-color: black;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 90% 10%;
    align-items: center;

    @media (max-width: 450px) {
      align-items: flex-start;
      margin-top: 40px;
    }

    .arrowIconContainer {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all ease 2s;
      color: white;
    }
  }

  .summary {
    width: 90%;
    max-width: 600px;
    height: 80vh;
    margin: 0 auto;
    padding: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      margin-top: 10px;
      line-height: 20px;

      &::first-letter {
        margin-left: 10px;
      }
    }

    div {
      margin-top: 70px;
      color: black;
      svg {
        margin-right: 10px;
      }
    }
  }

  .carrousellTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .curriculumContainer {
  }
`;
