import { HalfMoon, Container, DevJobs, Links } from "./styles";

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
      <Links>Logout</Links>
    </div>
  </Container>
  )


}

export default Header