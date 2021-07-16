import Button from "../../components/Button";
import { Container } from "./styles";
import Header from "../../components/Header";
import { useResume } from "../../providers/ResumeDownload";
import {
  FaGraduationCap,
  FaCreativeCommonsNd,
  FaBriefcase,
  FaLaptopCode,
  FaTools,
  FaLinkedin,
  FaPhoneAlt,
  FaHome,
  FaEnvelope,
} from "react-icons/fa";
import customStyles from "../../utils/customStyles";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Messages } from "../../components/Forms/MessagesForm";

const VisualizationResume = () => {
  const windowPrint = () => {
    window.print();
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  const setModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const renderUser = localStorage.getItem("@DevJobs:Render:User") || null;

  const {
    getResumeInfo,
    resumeObjective,
    resumeEducation,
    resumeOtherSkills,
    resumeExperience,
    resumeTechSkills,
  } = useResume();

  const backPage = () => {
    window.history.back();
  };

  useEffect(() => {
    if (renderUser) {
      getResumeInfo(renderUser);
    }
  }, []);

  return (
    <>
      <Container color={"var(--dark-grey)"}>
        <div className="noPrint header">
          <Header
            setLeft={
              <Button
                setColor="var(--blue)"
                setSize="large"
                setClick={windowPrint}
              >
                Print
              </Button>
            }
            setRight={
              <Button setColor="var(--red)" setSize="large" setClick={backPage}>
                Back
              </Button>
            }
          ></Header>
        </div>

        <main>
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
            onRequestClose={setModal}
            ariaHideApp={false}
          >
            <Messages setModal={setModal} userId={renderUser} />
          </Modal>

          <section className="summary">
            <article className="name">
              <h2>{resumeObjective && resumeObjective.firstName}</h2>
              <h2>{resumeObjective && resumeObjective.lastName}</h2>
            </article>
            <article className="personalInfo">
              <div className="noPrint">
                {renderUser && (
                  <Button
                    setColor="var(--green)"
                    setClick={setModal}
                    setSize="huge"
                  >
                    Contact DEV
                  </Button>
                )}
              </div>
              <h3>
                {resumeObjective && resumeObjective.address}
                <FaHome />
              </h3>
              <h3>
                {resumeObjective && resumeObjective.phone}
                <FaPhoneAlt />
              </h3>
              <h3>
                {resumeObjective && resumeObjective.email}
                <FaEnvelope />
              </h3>
              <h3>
                {resumeObjective && resumeObjective.linkedinProfile}
                <FaLinkedin />
              </h3>
            </article>
          </section>
          <section className="objective">
            <h2>
              <FaCreativeCommonsNd /> &nbsp; Objective
            </h2>
            <p>{resumeObjective.objective && resumeObjective.objective}</p>
          </section>
          <section className="education">
            <h2>
              <FaGraduationCap /> &nbsp;Education
            </h2>

            {resumeEducation &&
              resumeEducation.map((x, index) => (
                <article key={index}>
                  <div className="educationInfo">
                    <span className="degreeTitle">{x.degree}&nbsp;</span>

                    <span className="school">| {x.school}</span>
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
              <FaBriefcase /> &nbsp; Experience
            </h2>

            {resumeExperience &&
              resumeExperience.map((x, index) => (
                <article key={index}>
                  <div className="jobInfo">
                    <span className="jobTitle">{x.role}&nbsp;</span>

                    <span className="company">| {x.company}</span>
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
              <FaLaptopCode /> &nbsp; Tech Skills
            </h2>
            <div className="skillBox">
              {resumeTechSkills &&
                resumeTechSkills.map((x, index) => (
                  <article key={index}>
                    <div className="skillsInfo">
                      <div className="skillName">{x.description}: &nbsp;</div>
                      <div className="skillLevel">{x.level}</div>
                    </div>
                  </article>
                ))}
            </div>
          </section>
          <section className="otherSkills">
            <h2>
              <FaTools /> &nbsp; Other Skills
            </h2>
            <div className="skillBox">
              {resumeOtherSkills &&
                resumeOtherSkills.map((x, index) => (
                  <article key={index}>
                    <div className="skillsInfo">
                      <div className="skillName">{x.description}: &nbsp;</div>
                      <div className="skillLevel">{x.level}</div>
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

export default VisualizationResume;
