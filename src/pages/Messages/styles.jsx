import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
  button {
    margin-bottom: 10px;
  }
`;

export const Message = styled.div`
  background-color: var(--light-grey);
  margin: 20px;
  height: 80%;
  width: 80%;
  top: 0;
  left: 0;
  h3 {
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 27%;
  }
`;

export const Email = styled.div`
  text-align: left;
  background-color: var(--grey);
  height: 40px;
  width: 94%;
  padding: 8px;
  margin: 10px;
  text-overflow: clip;
  font-family: "Cormorant", serif;
  overflow: visible;
  overflow-wrap: break-word;
  h3 {
    font-size: 1.2rem;
  }
`;

export const MessageContent = styled.div`
  background-color: var(--grey);
  text-align: left;
  height: 100px;
  width: 94%;
  margin: 10px;
  padding: 6px;
  overflow-y: scroll;
  font-size: 1.2rem;
  font-family: "Cormorant", serif;
`;

export const Title = styled.div`
  text-align: center;
  margin-top: 2.5rem;
  font-family: "Cormorant Garamond", serif;
  font-size: 1.5rem;
`;
export const Name = styled.div`
  text-align: left;
  background-color: var(--grey);
  height: 40px;
  width: 94%;
  padding: 8px;
  margin: 10px;
  text-overflow: clip;
  font-family: "Cormorant", serif;
  overflow: visible;
  overflow-wrap: break-word;
  h3 {
    font-size: 1.2rem;
  }
`;
