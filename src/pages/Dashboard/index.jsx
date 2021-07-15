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
import { useEffect } from "react";
import { useResume } from "../../providers/ResumeDownload";
import { useState } from "react";


const Dashboard = () => {

 const {resumeMessages} = useResume()

 const [messageCount, setMessageCount] = useState()

  const { userId, handleLogout } = useToken();
  const history = useHistory();
  const sendToHome = () => {
    handleLogout();
    history.push("/");
  };

  useEffect(()=>{

    setMessageCount(resumeMessages.length)  
  },[])

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
            <h3>Resume</h3>
            <Link to="/resume"><StyledImg src={resume} alt="Resume" /></Link>
          </ContainerTitleImg>

          <ContainerTitleImg hasInfo={resumeMessages.length}>
            <h3>Messages</h3>
            <Link to="/messages"><StyledImg src={messages} alt="Messages" />
            <div className="messageLength"><p>{resumeMessages.length}</p></div>
            
            </Link>
          </ContainerTitleImg>
        </ContainerOptions>
      </ContainerPage>
    </>
  );
};

export default Dashboard;
