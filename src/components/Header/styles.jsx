import styled from "styled-components";
import { Link } from "react-router-dom";

export const Links = styled(Link)`
  font-size: 1.2rem;
  font-family: "Carrois Gothic", sans-serif;
  text-decoration: none;
  color: var(--dark-grey);
  :hover {
    border-bottom: 1px solid var(--blue);
  }
`;
export const HalfMoon = styled.div`
  background: var(--white);
  z-index: 1;
  text-align: center;
  border-radius: 50% / 0 0 100% 100%;
  width: 55%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start ;

  @media (min-width: 500px) {
    height: 110px;
  }

`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 4px;
  padding-left: 4px;
  background: ${(props) =>
    props.setColor ? props.setColor : "var(--grey-header)"};
  border-bottom: 1px solid
    ${(props) => (props.setBorder ? props.setBorder : "var(--grey)")};
  height: 17vh;
  Link {
    text-decoration: none;
  }
  h3 {
    font-size: 15px;
  }

  @media (min-width: 500px) {
    height: 15vh;
  }
`;

export const DevJobs = styled.div`
  background-color: var(--blue);
  color: white;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  text-align: center;
  position: absolute;
  z-index: 1;
  border: 6px double var(--white);
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 1.2rem;
  }
  @media (min-width: 500px) {
    margin-top: 60px;
  }
`;
