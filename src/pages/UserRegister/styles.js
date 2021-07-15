import styled from "styled-components";

export const Box = styled.div`
  background: var(--gradient-white);
`

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 30px;
  width: 100%;
  align-items: center;
  justify-content: center;

  p:first-of-type {
    font-size: 1.3rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 15px;
  margin-top: 30px;

  h1 {
    color: white;
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    width: 80%;
    max-width: 550px;
    background: var(--dark-grey);
    border-radius: 15px;
  }
`;

export const FormStyled = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 15px;

  a {
    color: var(--blue);
    font-weight: bold;
  }
`;
