import styled from "styled-components";

export const Container = styled.div`
  a {
    font-size: 1rem;
    font-family: "Carrois Gothic", sans-serif;
    text-decoration: none;
    color: var(--dark-grey);
    :hover {
      border-bottom: 1px solid var(--blue);
    }
    @media (min-width: 500px) {
      font-size: 1.3rem;
    }
  }
`;
