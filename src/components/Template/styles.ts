import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  header {
    background-color: black;
    width: 100%;
    height: 70px;
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

`