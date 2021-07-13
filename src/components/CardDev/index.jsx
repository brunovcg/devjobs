import { Container, DevName, DevInfo } from "./styles";
const CardDev = ({ name, city, speciality, disponibility, experience }) => {
  return (
    <Container>
      <DevName>
        <h2>{name}</h2>
      </DevName>
      <DevInfo>
        <h3>{city}</h3>
        <h3>{speciality}</h3>
        <h3>{disponibility}</h3>
        <h3>{experience}</h3>
      </DevInfo>
    </Container>
  );
};

export default CardDev;
