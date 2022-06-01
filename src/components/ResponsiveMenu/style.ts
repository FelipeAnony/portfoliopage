import styled from "styled-components";

type Props = {
  menuIsOpen: boolean;
};

export const Container = styled.div<Props>`
  width: 100%;
  max-width: 1000px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white; 
  position: relative;
  margin: 0 auto;

  @media (max-width: 450px) {
    flex-direction: column;
    max-width: calc(100%);
  }

  nav {
    transition: all ease .5s;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;

    @media(max-width: 450px){
      position: absolute;
      top: ${props => props.menuIsOpen ? '70px' : '-200px'};
      flex-direction: column;
      background-color: #111;
      padding: 10px 0;
    }
  }

  li {
    display: inline-block;
    margin-left: 15px;
    
    @media(max-width: 450px){
      display: block;
      margin: 15px 20px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .burguerMenuIcon {
    cursor: pointer;
    font-size: 32px;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    padding-left: 20px;
    z-index: 10;

    @media(min-width: 450px){
      display: none;
    }
  }

`