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
    width: 80%;

    h2{
        color: var(--dark-grey);
        margin-bottom: 15px;
    }

    div {
      width: 100%;
    }

    .buttonBox {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
