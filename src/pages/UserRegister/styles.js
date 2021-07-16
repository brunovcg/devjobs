import styled from "styled-components";

export const Box = styled.div`
  background: var(--gradient-white);
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 60px;
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

  h2 {
    color: var(--dark-grey);
    margin-bottom: 2.5rem;
    margin-top: 1rem;
    font-size: 2.3rem;
  }

  @media (min-width: 768px) {
    max-width: 450px;
    background: var(--dark-grey);
    border-radius: 15px;

    h2 {
      color: white;
    }
  }
`;

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 15px;

  a {
    color: var(--blue);
    font-weight: bold;
  }
`;
