import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  form {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 80%;

    h2 {
      color: var(--maroon);
      font-size: 2rem;
      height: 10%;
      margin-bottom: 30px;
    }

    .inputBox {
      width: 100%;
      display:flex;
      justify-content: center;
      height: 65%;
    }

    .buttonBox {
      height: 15%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
