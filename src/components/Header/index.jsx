import { HalfMoon, Container, DevJobs, Links } from "./styles";
import Button from "../Button";
const Header = () => {
  return (
    <Container>
      <Links>Resume</Links>
      <HalfMoon>
        <DevJobs>
          <h1>DevJobs</h1>
        </DevJobs>
      </HalfMoon>
      <div>
        <Button setColor="red" size="large">
          <h3>Logout</h3>
        </Button>
      </div>
    </Container>
  );
};

export default Header;
