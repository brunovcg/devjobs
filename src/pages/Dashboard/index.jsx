import messages from "../../assets/email.png";
import resume from "../../assets/resume.png";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { useToken } from "../../providers/TokenProvider";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useResume } from "../../providers/ResumeDownload";
import { useState } from "react";

const Dashboard = () => {
  const { resumeMessages } = useResume();

  const [messageCount, setMessageCount] = useState();

  const { userId, handleLogout } = useToken();
  const history = useHistory();
  const sendToHome = () => {
    handleLogout();
    history.push("/");
  };

  useEffect(() => {
    setMessageCount(resumeMessages.length);
  }, []);

  return (
    <>
      <Header
        setRight={
          <Button setColor="var(--red)" setSize="large" setClick={sendToHome}>
            Logout
          </Button>
        }
      />
      <Container hasInfo={resumeMessages.length}>
        <div className="imageResume">
          <h3>Resume</h3>
          <div className="resumeBox">
            <Link to="/resume">
              <img className="resume" src={resume} alt="Resume" />
            </Link>
          </div>
        </div>

        <div className="imageMessage" >
          <h3>Messages</h3>
          <div className="messageBox">
            <Link to="/messages">
              <div className="messageLength">
                <p className="alert">{resumeMessages.length}</p>
              </div>
              <img className="message" src={messages} alt="Messages" />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
