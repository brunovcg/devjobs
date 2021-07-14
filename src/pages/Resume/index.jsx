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
import { TechSkills } from "../../components/Forms/TechSkills";
import { OtherSkills } from "../../components/Forms/OtherSkills";
import { useResume } from "../../providers/ResumeDownload";
import { useEffect } from "react";

const Resume = () => {
  const history = useHistory();

  const visualization = () => {
    history.push("/visualizationResume");
  };
  const  userId  = localStorage.getItem("@DevJobs:User:Id");
  const {handleLogout} = useToken();
  const { getResumeInfo, resume} = useResume();

  // const [resumeInfo, setResumeInfo] = useState({})

  const sendToHome = () => {
    handleLogout();
    history.push("/");
  };

  const [formChoice, setFormChoice] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);

  const setModal = (path) => {
    setFormChoice(path ? path : "");
    setIsOpen(!modalIsOpen);
  };

  const deleteAny = (endpoint, id) => {
    api.delete(`http.api.com/${endpoint}/${id}`);
  };

  useEffect(()=>{
    getResumeInfo(userId)
  },[])

  return (
    <>
      <button onClick={()=>console.log(resume)}>teste 2</button>
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
              <Button
                setSize={"large"}
                setColor="var(--red)"
                setClick={sendToHome}
              >
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
            ariaHideApp={false}
          >
            {formChoice === "Education" ? (
              <Education />
            ) : formChoice === "Experience" ? (
              <Experience />
            ) : formChoice === "Objective" ? (
              <Objective setModal={setModal}/>
            ) : formChoice === "TechSkills" ? (
              <TechSkills />
            ) : (
              <OtherSkills/>
            )}
          </Modal>

          <section className="objective">
            <div>
            </div>
            <h2>
              Objective
              <Button setClick={() => setModal("Objective")} setColor="green">
                <FaRegEdit />
              </Button>
            </h2>
            <p>
              {resume.users && resume.users.objective}
            </p>
          </section>
          <section className="education">
            <h2>
              Education
              <Button setClick={() => setModal("Education")} setColor="green">
                <FaRegEdit />
              </Button>
            </h2>

            {resume.education && resume.education
              .filter((x) => x.userId === 1)
              .map((x, index) => (
                <article key={index}>
                  <div className="educationInfo">
                    <span className="degreeTitle">{x.degree}&nbsp;</span>

                    <span className="school">| {x.school}</span>
                    <Button
                      setClick={() => console.log("excluir")}
                      setColor="var(--red)"
                    >
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

            {resume.experience && resume.experience
              .filter((x) => x.userId === 1)
              .map((x, index) => (
                <article key={index}>
                  <div className="jobInfo">
                    <span className="jobTitle">{x.role}&nbsp;</span>

                    <span className="company">| {x.company}</span>
                    <Button
                      setClick={() => console.log("excluir")}
                      setColor="var(--red)"
                    >
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
              {resume.techSkills && resume.techSkills
                .filter((x) => x.userId === 1)
                .map((x, index) => (
                  <article key={index}>
                    <div className="skillsInfo">
                      <div className="skillName">{x.description}: &nbsp;</div>
                      <div className="skillLevel">{x.level}</div>
                      <Button
                        setClick={() => console.log("excluir")}
                        setColor="var(--red)"
                      >
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
              {resume.otherSkills && resume.otherSkills
                .filter((x) => x.userId === 1)
                .map((x, index) => (
                  <article key={index}>
                    <div className="skillsInfo">
                      <div className="skillName">{x.description}: &nbsp;</div>
                      <div className="skillLevel">{x.level}</div>
                      <Button
                        setClick={() => console.log("excluir")}
                        setColor="var(--red)"
                      >
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
