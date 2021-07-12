import { HalfMoon, Container } from "./styles";
import { Link } from "react-router-dom";
const Header = ({ setColor, setBorder, setRight, setLeft, hideImage }) => {
  return (
    <Container setColor={setColor} setBorder={setBorder}>
      
      <div className="left">{setLeft}</div>

      <HalfMoon>
        { !hideImage &&
        <Link to="/">
          <div>
            <h1>DevJobs</h1>
          </div>
        </Link>
      }

      </HalfMoon>

      <div className="right">{setRight}</div>
    </Container>
  );
};

export default Header;
