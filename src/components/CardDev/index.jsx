import { Container, DevName, DevInfo } from "./styles";
import { Link } from "react-router-dom";

const CardDev = ({ name, city, speciality, disponibility, experience }) => {
  return (
    <Container>
      <Link>
        <DevName>
          <h2>{name}</h2>
        </DevName>
      </Link>
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
