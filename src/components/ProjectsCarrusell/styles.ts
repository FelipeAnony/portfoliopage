import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex: 0;
  position: relative;

  &:hover .arrowLeft,
  &:hover .arrowRight {
    opacity: 0.8;
    background-color: #333;
  }

  .arrowLeft,
  .arrowRight {
    cursor: pointer;
    height: 80%;
    display: flex;
    align-items: center;
    position: absolute;
    opacity: 0;
  }

  .arrowLeft {
    left: 0px;
  }

  .arrowRight {
    right: 0px;
  }

  .icon {
    color: white;
    font-size: 20px;
  }

  .itensContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
