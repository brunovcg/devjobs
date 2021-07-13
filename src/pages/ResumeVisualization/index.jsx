import Button from "../../components/Button";
import { Container } from "./styles";
import Header from "../../components/Header";
import { testUsers } from "../../utils/userResumeInfo";

const VisualizationResume = () => {
  const windowPrint = () => {
    window.print();
  };

  const backPage = () => {
    window.history.back();
  };

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
          <section className="summary">
            <article className="name">
              <h2>
                {testUsers.users
                  .filter((x) => x.id === 1)
                  .map((x) => x.firstName)}
              </h2>
              <h2>
                {testUsers.users
                  .filter((x) => x.id === 1)
                  .map((x) => x.lastName)}
              </h2>
            </article>
            <article className="personalInfo">
              <h3>
                {testUsers.users
                  .filter((x) => x.id === 1)
                  .map((x) => x.address)}
              </h3>
              <h3>
                {testUsers.users.filter((x) => x.id === 1).map((x) => x.phone)}
              </h3>
              <h3>
                {testUsers.users.filter((x) => x.id === 1).map((x) => x.email)}
              </h3>
              <h3>
                {testUsers.users
                  .filter((x) => x.id === 1)
                  .map((x) => x.linkedinProfile)}
              </h3>
            </article>
          </section>
          <section className="objective">
            <h2>Objective</h2>
            <p>
              {testUsers.users
                .filter((x) => x.id === 1)
                .map((x) => x.summary.objective)}
            </p>
          </section>
          <section className="education">
            <h2>Education</h2>

            {testUsers.education
              .filter((x) => x.userId === 1)
              .map((x, index) => (
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
            <h2>Experience</h2>

            {testUsers.experience
              .filter((x) => x.userId === 1)
              .map((x, index) => (
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
            <h2>Tech Skills</h2>
            <div className="skillBox"> 
            {testUsers.techSkills
              .filter((x) => x.userId === 1)
              .map((x, index) => (
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
            <h2>Other Skills</h2>
            <div className="skillBox"> 
              {testUsers.otherSkills
                .filter((x) => x.userId === 1)
                .map((x, index) => (
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
