import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--dark-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: fit-content;
  width: 250px;
  color: white;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-top: 3rem;
  border-radius: 15px;
  box-shadow: -9px 12px 15px -6px #000000;

  .buttonBox {
    button {
      background-color: var(--blue);
      border-radius: 50%;
      width: 150px;
      height: 150px;
      font-size: 1.2rem;
      padding: 10px;
      line-height: 2rem;
      border: outset 1px var(--white);
    }
  }

  .devInfo {
    height: 100%;
    width: 100%;

    line-height: 2.5rem;
    margin-top: 5px;
    margin-bottom: 5px;
    h3 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-size: 1rem;

      svg{
        margin-right: 10px;
      }
    }
  }

  .buttonBoxResume {
    button {
      background-color: var(--blue);
      font-size: 1rem;
    }
  }
`;
