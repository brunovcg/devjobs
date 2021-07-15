import styled from "styled-components";

export const Container = styled.div`
  a {
    font-size: 1.1rem;
    font-weight: bold;
    font-family: "Carrois Gothic", sans-serif;
    text-decoration: none;
    color: var(--dark-grey); 
    border-bottom: 1px solid transparent;
    transition: 0.7s;

    :hover {
      border-bottom: 1px solid var(--blue);
      transition: 0.4s;
    }

    @media (min-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;
