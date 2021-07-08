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
  background-color: #ececec;

  z-index: -1;
  text-align: center;
  border-radius: 50% / 0 0 100% 100%;
  width: 50%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 4px;
  padding-left: 4px;
  Link {
    text-decoration: none;
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
  margin-top: 35px;
  h1 {
    margin-top: 35px;
    font-size: 1.2rem;
  }
`;
