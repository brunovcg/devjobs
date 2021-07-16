import { Container } from "./styles";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import customStyles from "../../utils/customStyles";
import { UserPreview } from "../UserPreview";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const CardDev = ({
  userId,
  name,
  email,
  phone,
  address,
  linkedinProfile,
  objective,
  birthDate,
}) => {
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = useState(false);
  const openDetails = () => {
    localStorage.setItem("@DevJobs:Render:User", JSON.stringify(userId));
    setIsOpen(!modalIsOpen);
  };

  const setModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const renderResume = () => {
    history.push("/visualizationResume");
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={setModal}
        ariaHideApp={false}
      >
        <UserPreview
          renderResume={renderResume}
          setModal={setModal}
          name={name}
          email={email}
          phone={phone}
          address={address}
          linkedinProfile={linkedinProfile}
          objective={objective}
          birthDate={birthDate}
        />
      </Modal>

      <Container>
        <div className="buttonBox">
          <Button setClick={openDetails}>{name}</Button>
        </div>

        <div className="devInfo">
          <h3><FaPhoneAlt/>{phone}</h3>
        </div>
        <div className="buttonBoxResume"></div>
      </Container>
    </>
  );
};

export default CardDev;
