import { Link } from "react-router-dom";
import { Container } from "./styles";

const HeaderLink = ({ setName, setPath }) => {
  return (
    <Container>
      <Link to={setPath}>{setName}</Link>
    </Container>
  );
};

export default HeaderLink;
