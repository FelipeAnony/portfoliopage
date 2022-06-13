import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #111;
  width: calc(100% - 20px);
  max-width: 600px;
  margin: 100px auto;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px;
  align-items: center;
  justify-content: center;

  color: white;

  h3 {
    text-align: center;
  }

  .inputContainer {
    display: flex;
    flex-direction: column;
    padding: 2px;
    margin: 5px 0;
    width: 100%;

    input,
    textarea {
      border: solid thin transparent;
      border-radius: 3px;
      outline: none;
    }

    textarea {
      resize: none;
    }
  }

  .actions {
    display: flex;
    width: 100%;
    justify-content: center;

    div {
      margin-left: 30px;
    }
  }
`;
