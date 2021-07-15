import messages from "../../assets/email.png";
import resume from "../../assets/resume.png";
import {Link} from 'react-router-dom'
import {
  ContainerPage,
  ContainerOptions,
  ContainerTitleImg,
  StyledImg,
} from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useToken } from "../../providers/TokenProvider";
import { useHistory } from "react-router-dom";


const Dashboard = () => {

  const { userId, handleLogout } = useToken();
  const history = useHistory();
  const sendToHome = () => {
    handleLogout();
    history.push("/");
  };

  return (
    <>
      <Header 
        setRight={<Button
          setColor="var(--red)" setSize="large" setClick={sendToHome}
        >Logout</Button>}
      />
      <ContainerPage>
        <ContainerOptions>
          <ContainerTitleImg>
            <h3>Messages</h3>
            <Link to="/messages"><StyledImg src={messages} alt="Messages" /></Link>
          </ContainerTitleImg>
          <ContainerTitleImg>
            <h3>Resume</h3>
            <Link to="/resume"><StyledImg src={resume} alt="Resume" /></Link>
          </ContainerTitleImg>
        </ContainerOptions>
      </ContainerPage>
    </>
  );
};

export default Dashboard;
