import { useState, useEffect } from "react";
import api from "../../services/api";
const Messages = () => {
  const [personalMessages, setPersonalMessages] = useState([]);
  useEffect(() => {
    api.get("/messages").then((response) => setPersonalMessages(response.data));
  }, []);
  return (
    <div>
      <h2>Messages</h2>
      {personalMessages &&
        personalMessages.map((item, index) => (
          <div>
            <div>
              <h2 key={index}>{item.companyEmail}</h2>
            </div>
            <div>
              <h2>{item.message}</h2>
            </div>
            <button>Dismiss</button>
          </div>
        ))}
    </div>
  );
};

export default Messages;
