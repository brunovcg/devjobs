import styled from "styled-components";

export const Container = styled.div`
  width: ${props => props.setWidth};
  height: ${props => props.setHeight};

  input {
    background: var(--grey);
    padding-left: 10px;
    color: var(--dark-grey);
    font-size: 1.2rem;
    width: 100%;
    height: 60%;
    border: none;
    font-weight: bold;
    border-radius: 11px;
    &::placeholder {
      color: var(--white);
    }
  }
  div {
    color: var(--red);
    font-size: 1.1rem;
    font-weight: bold;
    width: 100%;
    height: 40%;
    padding-left: 10px;
  }
`;
