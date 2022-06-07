import styled from 'styled-components';

type ButtonProps = {
  Disabled?: boolean;
  BgColor: string;
};

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  header {
    background-color: black;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    z-index: 100;
  }

  main {
    width: 100%;
    background-color: black;
    margin: 0 auto;
    min-height: calc(100vh - 70px);
  }

  footer {
    background-color: black;
    width: 100%;
    height: 100px;
  }
`;

export const MainButton = styled.div<ButtonProps>`
  cursor: ${(props) => (props.Disabled ? 'auto' : 'pointer')};
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: transparent solid thin;
  background-color: ${(props) => props.BgColor};
  opacity: ${(props) => (props.Disabled ? 0.5 : 1)};
  margin: 0 5px;

  svg {
    margin-right: 5px;
    font-size: 20px;
    width: auto;
  }

  & * {
    color: white;
    text-decoration: none;
    width: 100%;
    text-align: center;
    cursor: inherit;
  }

  &:hover {
    opacity: ${(props) => (props.Disabled ? 0.5 : 0.9)};
  }
`;
