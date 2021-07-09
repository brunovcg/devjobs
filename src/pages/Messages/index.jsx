import { useState, useEffect } from "react";
import api from "../../services/api";
import { Container, Message, Email, MessageContent } from "./styles";
import Button from "../../components/Button";
const Messages = () => {
  const [personalMessages, setPersonalMessages] = useState([]);
  useEffect(() => {
    api.get("/messages").then((response) => setPersonalMessages(response.data));
  }, []);
  return (
    <Container>
      <h2>Messages</h2>
      {personalMessages &&
        personalMessages.map((item, index) => (
          <Message>
            <Email>
              <h2 key={index}>{item.companyEmail}</h2>
            </Email>
            <MessageContent>
              <h2>{item.message}</h2>
            </MessageContent>
            <Button setColor="red" setSize="large">
              <h3>Dismiss</h3>
            </Button>
          </Message>
        ))}
    </Container>
  );
};

export default Messages;
