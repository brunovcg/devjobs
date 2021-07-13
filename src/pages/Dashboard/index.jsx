import messages from "../../assets/email.png";
import resume from "../../assets/resume.png";
import {
  ContainerPage,
  ContainerOptions,
  ContainerTitleImg,
  StyledImg,
} from "./styles";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <>
      <Header />
      <ContainerPage>
        <ContainerOptions>
          <ContainerTitleImg>
            <h3>Messages</h3>
            <StyledImg src={messages} alt="Messages" />
          </ContainerTitleImg>
          <ContainerTitleImg>
            <h3>Resume</h3>
            <StyledImg src={resume} alt="Resume" />
          </ContainerTitleImg>
        </ContainerOptions>
      </ContainerPage>
    </>
  );
};

export default Dashboard;
