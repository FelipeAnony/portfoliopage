import styled from 'styled-components';

export const Container = styled.div`
  width: 90vw;
  max-width: 950px;
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: #111;
  border-radius: 5px;

  .imagesContainer {
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;

    .mainImage {
      width: 100%;
      height: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5px;
    }

    .imagesRow {
      width: 100%;
      height: 20%;
      overflow-x: auto;
      overflow-y: hidden;
      display: grid;
      grid-column-gap: 2px;
      grid-template-rows: 100%;
      grid-template-columns: 20%;
      grid-auto-flow: column;
      grid-auto-columns: 20%;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        max-height: 90%;
      }
    }
  }

  .infoContainer {
    width: 40%;
    height: 100%;
    max-height: 600px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;

    ul {
      margin: 5px 0;

      li {
        font-size: 14px;
        margin-left: 20px;
        margin-top: 5px;
        color: #999;
      }
    }

    .title {
      margin-bottom: 10px;
      height: 15%;
      display: flex;
      align-items: center;
    }

    .description {
      margin-bottom: 10px;
      width: 80%;
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .span2 {
        margin-top: 50px;
      }
    }

    .actions {
      display: flex;
      height: 25%;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;

    .imagesContainer {
      width: 100%;
      height: 55%;

      .imagesRow {
        grid-template-columns: 15%;
        grid-auto-columns: 15%;
      }
    }

    .infoContainer {
      width: 100%;
      height: 45%;

      .title {
        height: 10%;
      }

      .description {
        font-size: 12px;
        width: 100%;
        height: 75%;
        display: grid;
        grid-template-columns: 47% 47%;
        grid-template-rows: 10% 90%;
        grid-column-gap: 6%;
        align-items: flex-start;
        grid-template-areas:
          'span1 span2'
          'technologies features';
        padding: 5px;

        .span1 {
          grid-area: span1;
        }

        .span2 {
          grid-area: span2;
          margin-top: 0;
        }

        .technologies {
          grid-area: technologies;
        }

        .features {
          grid-area: features;
        }

        ul {
          list-style-type: square;
          margin: 0;
          li {
            font-size: 11px;
            color: #999;
          }
        }
      }

      .actions {
        height: 15%;
      }
    }
  }
`;
