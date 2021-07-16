import styled from "styled-components";

export const ContainerPage = styled.div`
  background-image: var(--gradient-white);
  color: var(--dark-grey);
`;
export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  button {
    margin-bottom: 10px;
  }
`;

export const Message = styled.div`
  background-color: var(--light-grey);
  border-radius: 10px;
  padding: 10px;
  height: 80%;
  width: 80%;
  top: 0;
  left: 0;
  box-shadow: -1px 5px 15px -5px #000000;

  margin-bottom: 2rem;
  h3 {
    font-size: 1.2rem;
  }
  @media only screen and (min-width: 768px) {
    margin: 1rem;
    width: 32%;
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
  font-family: "Carrois Gothic", sans-serif;
  overflow: visible;
  overflow-wrap: break-word;
  border-radius: 10px;
  h3 {
    font-size: 1.2rem;
    @media (max-width: 500px) {
      height: 120px;
      font-size: 1rem;
    }
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
  font-family: "Carrois Gothic", sans-serif;
  border-radius: 10px;
  @media (max-width: 500px) {
    height: 110px;
    font-size: 1rem;
  }
`;

export const Title = styled.div`
  text-align: center;
  padding-top: 6%;
  padding-bottom: 4%;
  font-family: "Carrois Gothic", sans-serif;
  font-size: 1.5rem;
  padding-top: 5rem;
  padding-bottom: 2rem;
`;
export const Name = styled.div`
  text-align: left;
  background-color: var(--grey);

  height: 40px;
  width: 94%;
  padding: 8px;
  margin: 10px;
  text-overflow: clip;
  font-family: "Carrois Gothic", sans-serif;
  overflow: visible;
  overflow-wrap: break-word;
  border-radius: 10px;
  h3 {
    font-size: 1.2rem;

    @media (max-width: 500px) {
      height: 110px;
      font-size: 1rem;
    }
  }
`;
