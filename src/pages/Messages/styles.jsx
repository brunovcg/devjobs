import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.div`
  background-color: var(--light-grey);

  height: 100%;
  width: 80%;
  margin-top: 5px;
  top: 0;
  left: 0;
  h3 {
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Email = styled.div`
  background-color: var(--grey);
  height: 40px;
  width: 94%;
  padding: 5px;
  margin: 10px;
`;

export const MessageContent = styled.div`
  background-color: var(--grey);
  height: 100px;
  width: 94%;
  margin: 10px;
`;
