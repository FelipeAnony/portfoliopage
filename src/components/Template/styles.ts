import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  header {
    background-color: black;
    width: 100%;
    min-height: 70px;
  }

  main {
    min-height: calc(100%- 170px);
    width: 100%;
    background-color: black;
    margin: 0 auto;
  }

  footer {
    background-color: black;
    width: 100%;
    height: 100px;
  }

`