import Button from "../../components/Button";
import { Container } from "./styles";
import Header from "../../components/Header";

const VisualizationResume = () => {
  const testUsers = {
      users: [
        {
          email: "brunovcg@gmail.com",
          firstName: "Bruno",
          lastName: "Gouveia",
          birthDate: "14/04/1988",
          linkedinProfile:
            "https://www.linkedin.com/in/bruno-gouveia-4788a750/",
          address: "Avenida Boa Viagem 110, Recife - PE",
          phone: "(81) 994791589",
          color: "var(-blue)",
          id: 1,
          summary: {
            objective: "Back-End",
            city: "São Paulo",
            speciality: "Dev Junior",
            disponibility: "Full time",
            experienceTime: "1 year"
          },
        },
      ],
      education: [
        {
          id: 1,
          userId: 1,
          degree: "Superior Adm",
          school: "USP",
          dateFrom: "10/02/20",
          dateTo: "Atualmente",
          description: "Lorem Ipsum"
        },
      ],
      experience: [
        {
          id: 1,
          userId: 1,
          role: "Developer",
          company: "Kenzie",
          dateFrom: "10/02/20",
          dateTo: "Atualmente",
          description: "Lorem Ipsum"
        },
      ],
      techSkills: [
        {
          id: 1,
          userId: 1,
          description: "JS",
          level: "Beginner"
        },
        {
          id: 2,
          userId: 1,
          description: "Python",
          level: "Intermediate"
        },
      ],
      otherSkills: [
        {
          id: 1,
          userId: 1,
          description: "Boa comunicação",
          level: "Advanced"
        },
        {
          id: 1,
          userId: 1,
          description: "Ingles",
          level: "Beginner"
        }
      ]
    };

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
              <h2>{testUsers.users.filter(x=>x.id === 1).map(x=>x.firstName)}</h2>
              <h2>{testUsers.users.filter(x=>x.id === 1).map(x=>x.lastName)}</h2>
            </article>
            <article className="personalInfo">
              <h3>{testUsers.users.filter(x=>x.id === 1).map(x=>x.address)}</h3>
              <h3>{testUsers.users.filter(x=>x.id === 1).map(x=>x.phone)}</h3>
              <h3>{testUsers.users.filter(x=>x.id === 1).map(x=>x.email)}</h3>
              <h3>{testUsers.users.filter(x=>x.id === 1).map(x=>x.linkedinProfile)}</h3>
            </article>
          </section>
          <section className="objective">
            <h2>Objective</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              quos cupiditate officiis dolorum, eos architecto. Assumenda, odit
              officia illum velit reiciendis quibusdam pariatur iure in quaerat
              ipsa ut qui quos?
            </p>
          </section>
          <section className="education">
            <h2>Education</h2>
            <article>
              <div className="educationInfo">
                <span className="degreeTitle">Degree Title &nbsp;</span>

                <span className="school">| School</span>
              </div>
              <div className="educationDate">
                <p>DATE FROM - </p>

                <p>DATE TO</p>
              </div>
              <p className="educationText">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                magni architecto ratione dolorum blanditiis similique qui ea
                eius, fuga fugiat officiis ullam officia amet iusto? Aliquid
                dolorum mollitia tempora explicabo!
              </p>
            </article>
          </section>

          <section className="experience">
            <h2>Experience</h2>
            <article>
              <div className="jobInfo">
                <span className="jobTitle">Job Title &nbsp;</span>
                <span className="company">| Company</span>
              </div>
              <div className="jobDate">
                <p>DATE FROM</p>
                <p>- DATE TO</p>
              </div>
              <p className="jobText">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
                magni architecto ratione dolorum blanditiis similique qui ea
                eius, fuga fugiat officiis ullam officia amet iusto? Aliquid
                dolorum mollitia tempora explicabo!
              </p>
            </article>
          </section>
          <section className="techSkills">
            <h2>Tech Skills</h2>
            <article>
              <div className="skillsInfo">
                <div className="skillName">JS: &nbsp;</div>
                <div className="skillLevel">Senior</div>
              </div>
            </article>
          </section>
          <section className="otherSkills">
            <h2>Other Skills</h2>
            <article>
              <div className="skillsInfo">
                <div className="skillName">English: &nbsp;</div>
                <div className="skillLevel">Intermediate</div>
              </div>
            </article>
          </section>
        </main>
      </Container>
    </>
  );
};

export default VisualizationResume;
