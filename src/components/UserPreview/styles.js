import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  .infoBox {
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    height: 80%;
    text-align: center;

    .userInfo {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h2 {
        color: var(--maroon);
        font-size: 2rem;
        height: 20%;
      }

      .H3 {
        width: 80%;
        text-align: center;
        color: var(--dark-grey);
        height: 10%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 10px;
        background: var(--light-grey);
        margin: 5px 0;

        svg {
          margin-right: 20px;
        }
      }

      .objective {
        width: 80%;
        height: 40%;
        background: var(--light-grey);
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 10px;
        overflow-y: scroll;
      }
    }
  }
  .buttonBox {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
