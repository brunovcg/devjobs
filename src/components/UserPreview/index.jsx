import { Container } from "./styles";
import Button from "../Button";

export const UserPreview = ({ renderResume, setModal, name, email, phone, address, linkedinProfile, objective }) => {
  return (
    <Container>
      <div className="infoBox">

        <div className="userInfo">

            <h2>DEVs Preview</h2>
            <h3>{name}</h3>
            <h3>{email}</h3>
            <h3>{phone}</h3>
            <h3>{address}</h3>
            <h3>{linkedinProfile}</h3>
            <h3>{objective}</h3>
            



        </div>

      </div>
      <div className="buttonBox">
        <Button
          setClick={() => renderResume()}
          setSize="huge"
          setColor="var(--green)"
        > Show
          Resume
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
