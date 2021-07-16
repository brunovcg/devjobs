import styled from "styled-components";

export const Container = styled.div`
  background-image: var(--gradient-white);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .containerSearch {
    margin-top: 60px;
    width: 90%;
    height: 20vh;
    background-color: var(--blue);
    border-radius: 15px;
    box-shadow: -9px 12px 15px -6px #000000;

    form {
      display: flex;
      width: 100%;
      height: 100%;
      .selectBox {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;

        div {
          width: 45%;
          div {
            width: 100%;
          }
        }
      }

      .buttonBox {
        width: 20%;

        display: flex;
        justify-content: center;
        align-items: center;

        button {
        }
      }
    }
  }

  .cardContainer {
    min-height: 60vh;
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 30px;

    .cardDevBox {
      display: flex;
      justify-content: center;
      width: 28%;
      min-height: 200px;
    }
  }

  @media (max-width: 500px) {
    padding-top: 50px;
    .containerSearch {
      margin-top: 20px;
      height: fit-content;
      padding: 30px 0;
      width: 80%;

      form {
        width: 100%;
        flex-direction: column;

        .selectBox {
          flex-direction: column;
          width: 100%;

          div {
            width: 80%;
            div {
            }
          }
        }
        .buttonBox {
          width: 100%;
        }
      }
    }

    .cardContainer {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: fit-content;

      .cardDevBox {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
