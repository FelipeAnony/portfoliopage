import styled from 'styled-components';

type Props = {
  itens: number;
  marginValue: number;
};

export const Container = styled.div<Props>`
  width: 100%;
  height: 80vh;
  max-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex: 0;
  position: relative;

  &:hover .arrowLeft,
  &:hover .arrowRight {
    opacity: 0.8;
  }

  .arrowLeft,
  .arrowRight {
    cursor: pointer;
    height: 80%;
    display: flex;
    align-items: center;
    position: absolute;
    opacity: 0;
    background-color: #333;
  }

  @media (max-width: 600px) {
    .arrowLeft,
    .arrowRight {
      opacity: 0.6;
    }
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
    width: calc(
      (${(props) => props.itens}) * 100% + (${(props) => props.itens - 1}) *
        10px
    );
    height: 95%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-left: ${(props) => props.marginValue}px;
    transition: all ease 0.3s;
  }

  .itensCounter {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    .itensCounter__iten {
      width: 30px;
      height: 10px;
      border-radius: 5px;
      background-color: #222;
      margin-right: 5px;
      cursor: pointer;
      transition: all ease 0.3s;
    }

    .selected {
      background-color: #777;
    }
  }
`;
