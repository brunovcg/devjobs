import { Container } from "./styles";
import Button from "../Button";
import {
  FaLinkedin,
  FaPhoneAlt,
  FaHome,
  FaEnvelope,
  FaSmile,
} from "react-icons/fa";


export const UserPreview = ({
  renderResume,
  setModal,
  name,
  email,
  phone,
  address,
  linkedinProfile,
  objective,
}) => {
  return (
    <Container>
      <div className="infoBox">
        <div className="userInfo">
          <h2>DEVs Preview</h2>
          <div className ="H3"><h3><FaSmile/>{name}</h3></div>
          <div className ="H3"><h3><FaEnvelope/>{email}</h3></div>
          <div className ="H3"><h3><FaPhoneAlt/>{phone}</h3></div>
          <div className ="H3"><h3><FaHome/>{address}</h3></div>
          <div className ="H3"><h3><FaLinkedin/>{linkedinProfile}</h3></div>
          <div className="objective">{objective}</div>
        </div>
      </div>
      <div className="buttonBox">
        <Button
          setClick={() => renderResume()}
          setSize="huge"
          setColor="var(--green)"
        >
          {" "}
          Show Resume
        </Button>

        <Button
          setClick={() => setModal()}
          setColor="var(--red)"
          setSize="huge"
        >
          Close
        </Button>
      </div>
    </Container>
  );
};
