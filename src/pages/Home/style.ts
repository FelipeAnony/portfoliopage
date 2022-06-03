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

  .curriculumContainer {
  }
`;
