import { useState, useEffect } from "react";
import api from "../../services/api";
import { Container, Message, Email, MessageContent, Title } from "./styles";
import Button from "../../components/Button";
const Messages = () => {
  const [personalMessages, setPersonalMessages] = useState([]);
  useEffect(() => {
    api.get("/messages").then((response) => setPersonalMessages(response.data));
  }, []);
  const deleteMessage = (id) => {
    api.delete(`/messages/${id}`).catch((error) => console.log(error));
  };
  return (
    <>
      <Title>
        <h2>Messages</h2>
      </Title>
      <Container>
        {personalMessages ? (
          personalMessages.map((item, index) => (
            <Message>
              <Email>
                <h3 key={index}>{item.companyEmail}</h3>
              </Email>
              <MessageContent>
                <p>{item.message}</p>
              </MessageContent>
              <Button
                onClick={() => deleteMessage(item.id)}
                setColor="red"
                setSize="large"
              >
                <h3>Dismiss</h3>
              </Button>
            </Message>
          ))
        ) : (
          <>
            <h1>No messages yet</h1>
          </>
        )}
      </Container>
    </>
  );
};

export default Messages;
