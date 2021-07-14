import Button from "../../components/Button";
import { Container } from "./styles";
import { useState } from "react";
import Modal from "react-modal";
import Header from "../../components/Header";
import { levelSkills, specialization } from "../../utils";
import { useToken } from "../../providers/TokenProvider";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import customStyles from "../../utils/customStyles";
import { testUsers } from "../../utils/userResumeInfo";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { Education } from "../../components/Forms/Education";
import { Experience } from "../../components/Forms/Experience";
import { Objective } from "../../components/Forms/Objective";
import { useEffect } from "react";
import { TechSkills } from "../../components/Forms/TechSkills";
import { OtherSkills } from "../../components/Forms/OtherSkills";

const Resume = () => {
  const history = useHistory();

  const visualization = () => {
    history.push("/visualizationResume");
  };

  const { userId } = useToken();

  const [formChoice, setFormChoice] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);

  const setModal = (path) => {
    setFormChoice(path);
    setIsOpen(!modalIsOpen);
  };


//  const deleteAny = (endpoint, id) => {
//   api.delete(
//     `http.api.com/${endpoint}/${id}`
//   )}


  useEffect(() => {}, []);

  return (
    <>
      <Container color={"var(--dark-grey)"}>
        <div className="noPrint header">
          <Header
            setLeft={
              <Button
                setSize="large"
                setColor="var(--dark-grey)"
                setClick={visualization}
              >
                PDF
              </Button>
            }
            setRight={
              <Button setSize={"large"} setColor="var(--red)" setClick={""}>
                Logout
              </Button>
            }
          />
        </div>

        <main>
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
            onRequestClose={setModal}
          >
            {formChoice === "Education" ? (
              <Education />
            ) : formChoice === "Experience" ? (
              <Experience />
            ) : formChoice === "Objective" ? (
              <Objective />
            ) : formChoice === "TechSkills" ? (
              <TechSkills />
            ) : (
              <OtherSkills />
            )}
          </Modal>

          <section className="objective">
            <h2>
              Objective
              <Button setClick={() => setModal("Objective")} setColor="green">
                <FaRegEdit />
              </Button>
            </h2>
            <p>
              {testUsers.users
                .filter((x) => x.id === 1)
                .map((x) => x.summary.objective)}
              <Button setClick={"excluir"} setColor="var(--red)">
                <FaTrashAlt />
              </Button>
            </p>
          </section>
          <section className="education">
            <h2>
              Education
              <Button setClick={() => setModal("Education")} setColor="green">
                <FaRegEdit />
              </Button>
            </h2>

            {testUsers.education
              .filter((x) => x.userId === 1)
              .map((x, index) => (
                <article key={index}>
                  <div className="educationInfo">
                    <span className="degreeTitle">{x.degree}&nbsp;</span>

                    <span className="school">| {x.school}</span>
                    <Button setClick={"excluir"} setColor="var(--red)">
                      <FaTrashAlt />
                    </Button>
                  </div>
                  <div className="educationDate">
                    <p>{x.dateFrom} - </p>

                    <p>{x.dateTo}</p>
                  </div>
                  <p className="educationText">{x.description}</p>
                </article>
              ))}
          </section>

          <section className="experience">
            <h2>
              Experience
              <Button setClick={() => setModal("Experience")} setColor="green">
                <FaRegEdit />
              </Button>
            </h2>

            {testUsers.experience
              .filter((x) => x.userId === 1)
              .map((x, index) => (
                <article key={index}>
                  <div className="jobInfo">
                    <span className="jobTitle">{x.role}&nbsp;</span>

                    <span className="company">| {x.company}</span>
                    <Button setClick={"excluir"} setColor="var(--red)">
                      <FaTrashAlt />
                    </Button>
                  </div>
                  <div className="jobDate">
                    <p>{x.dateFrom} - </p>

                    <p>{x.dateTo}</p>
                  </div>
                  <p className="jobText">{x.description}</p>
                </article>
              ))}
          </section>
          <section className="techSkills">
            <h2>
              Tech Skills
              <Button setClick={() => setModal("TechSkills")} setColor="green">
                <FaRegEdit />
              </Button>
            </h2>
            <div className="skillBox">
              {testUsers.techSkills
                .filter((x) => x.userId === 1)
                .map((x, index) => (
                  <article key={index}>
                    <div className="skillsInfo">
                      <div className="skillName">{x.description}: &nbsp;</div>
                      <div className="skillLevel">{x.level}</div>
                      <Button setClick={"excluir"} setColor="var(--red)">
                        <FaTrashAlt />
                      </Button>
                    </div>
                  </article>
                ))}
            </div>
          </section>
          <section className="otherSkills">
            <h2>
              {" "}
              Other Skills
              <Button setClick={() => setModal("OtherSkills")} setColor="green">
                <FaRegEdit />
              </Button>
            </h2>
            <div className="skillBox">
              {testUsers.otherSkills
                .filter((x) => x.userId === 1)
                .map((x, index) => (
                  <article key={index}>
                    <div className="skillsInfo">
                      <div className="skillName">{x.description}: &nbsp;</div>
                      <div className="skillLevel">{x.level}</div>
                      <Button setClick={"excluir"} setColor="var(--red)">
                        <FaTrashAlt />
                      </Button>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        </main>
      </Container>
    </>
  );
};

export default Resume;
