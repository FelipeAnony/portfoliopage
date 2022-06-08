import styled from 'styled-components';

type Props = {
  itens: number;
  marginValue: number;
};

export const Container = styled.div<Props>`
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
    width: calc(
      (${(props) => props.itens}) * 100% + (${(props) => props.itens - 1}) *
        10px
    );
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    margin-left: ${(props) => props.marginValue}px;
    transition: all ease 0.3s;
  }
`;
