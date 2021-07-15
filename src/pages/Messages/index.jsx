import { useState, useEffect } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import {
  Container,
  Message,
  Email,
  MessageContent,
  Title,
  Name,
  ContainerPage,
} from "./styles";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useToken } from "../../providers/TokenProvider";
import HeaderLink from "../../components/HeaderLink";
import { useHistory } from "react-router-dom";
const Messages = () => {
  const [personalMessages, setPersonalMessages] = useState([]);
  const { handleLogout, userToken } = useToken();
  const [userId, setUserId] = useState(
    localStorage.getItem("@DevJobs:User:Id")
  );
  const history = useHistory();
  useEffect(() => {
    console.log(userId);
    api
      .get(`/messages?userId=${userId}`)
      .then((response) => setPersonalMessages(response.data))
      .catch((err) => {
        toast.error("Request didn't work, try again");
        console.log(err);
      });
    
  }, []);

  const deleteMessage = (idToBeRemoved) => {
    console.log(idToBeRemoved);
    api
      .delete(`/messages/${idToBeRemoved}`)
      .catch((error) => console.log(error));
    setPersonalMessages(
      personalMessages.filter((item) => item.id !== idToBeRemoved)
    );
  };
  const sendToHome = () => {
    handleLogout();
    history.push("/");
  };
  return (
    <>
      <Header
        setLeft={<HeaderLink setName="Resume" setPath="/resume" />}
        setRight={
          <Button setColor="red" setSize="large" setClick={sendToHome}>
            Logout
          </Button>
        }
      />
      <ContainerPage>
        <Title>
          <h2>Messages</h2>
        </Title>
        <Container>
          {personalMessages &&
            personalMessages.map((item, index) => (
              <Message key={index}>
                <Name>
                  <h3>{item.name}</h3>
                </Name>
                <Email>
                  <h3>{item.companyEmail}</h3>
                </Email>
                <MessageContent>
                  <p>{item.message}</p>
                </MessageContent>
                <Button
                  setClick={() => deleteMessage(item.id)}
                  setColor="red"
                  setSize="large"
                >
                  <h3>Dismiss</h3>
                </Button>
              </Message>
            ))}
        </Container>
      </ContainerPage>
    </>
  );
};
export default Messages;
