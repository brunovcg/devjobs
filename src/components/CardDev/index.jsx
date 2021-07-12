import { Container, DevName, DevInfo } from "./styles";
const CardDev = () => {
  return (
    <Container>
      <DevName>
        <h2>Developer's name</h2>
      </DevName>
      <DevInfo>
        <h3>Developer's city</h3>
        <h3>Developer's Speciality</h3>
        <h3>Developer's disponibility</h3>
        <h3>Experience time</h3>
      </DevInfo>
    </Container>
  );
};

export default CardDev;
