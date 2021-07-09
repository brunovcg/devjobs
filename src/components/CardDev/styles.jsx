import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--dark-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 90%;
  width: 90%;
  color: white;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-top: 3rem;
  border-radius: 5px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const DevName = styled.div`
  background-color: var(--blue);
  height: 150px;
  width: 150px;
  border: 2px solid var(--white);
  color: white;
  border-radius: 50%;
  font-size: 1rem;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DevInfo = styled.div`
  height: 131%;
  width: 74%;
  align-items: center;
  justify-content: center;
  line-height: 2.5rem;
  h3 {
    font-size: 1.5rem;
  }
`;
