import { useState, useEffect } from "react";
import api from "../../services/api";
import {
  Container,
  Message,
  Email,
  MessageContent,
  Title,
  Name,
} from "./styles";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useToken } from "../../providers/TokenProvider";
import HeaderLink from "../../components/HeaderLink";
const Messages = () => {
  const [personalMessages, setPersonalMessages] = useState([]);
  const { userId, userToken } = useToken();
  useEffect(() => {
    console.log(userId);
    console.log(userToken);
    api.get("/messages").then((response) => setPersonalMessages(response.data));

    setPersonalMessages(
      personalMessages.filter((item) => item.userId === userId)
    );
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
  return (
    <>
      <Header
        setLeft={<HeaderLink setName="Resume" setPath="/resume" />}
        setRight={
          <Button setColor="red" setSize="large">
            Logout
          </Button>
        }
      />

      <Title>
        <h2>Messages</h2>
      </Title>
      <Container>
        {personalMessages &&
          personalMessages.map((item, index) => (
            <Message key={index}>
              <Name>{item.name}</Name>
              <Email>
                <h3>{item.companyEmail}</h3>
              </Email>
              <MessageContent>
                <p>{item.message}</p>
              </MessageContent>
              <Button
                setClick={() => deleteMessage(item.id)}
                setColor="red"
                setSize="huge"
              >
                <h3>Dismiss</h3>
              </Button>
            </Message>
          ))}
      </Container>
    </>
  );
};

export default Messages;
