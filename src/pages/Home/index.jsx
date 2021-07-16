import Button from "../../components/Button";
import HeaderLink from "../../components/HeaderLink";
import dev from "../../assets/dev.png";
import resumeHome from "../../assets/resumeHome.png";
import notebook from "../../assets/notebook.png";
import { members } from "../../utils/groupMembers";
import { Container } from "./styles";
import Header from "../../components/Header";

export const Home = () => {
  return (
    <>
      <Header
        setLeft={
          <HeaderLink setName="For Companies" setPath="/companyRegister" />
        }
        setRight={<HeaderLink setName="For Devs" setPath="/login" />}
      />

      <Container>
        <section className="presentation">
          <figure>
            <img src={notebook} alt="" />
          </figure>
        </section>

        <section className="forCompanies">
          <article className="companiesTitle">
            <h2>For Companies</h2>
            <div className="companiesTitleBox">
              <p>Search for resumes on our Engine...</p>
            </div>
          </article>

          <article className="companiesText">
            <p>
              Using our filters you can search easily for DEVs with the skills
              you need.
            </p>
            <figure>
              <img src={resumeHome} alt="resumeHome" />
            </figure>
          </article>
        </section>

        <section className="forDevs">
          <article className="forDevsTitle">
            <h2>and for DEVs</h2>
          </article>
          <article className="forDevsText">
            <figure>
              <img src={dev} alt="dev" />
            </figure>
            <p>
              You get templates to make it easier to format your Resume.
              Companies will be able to search for it in our search engine. You
              can also receive and view messages from them.
            </p>
          </article>
        </section>

        <section className="aboutUs">
          <h2>About Us</h2>
        
          <div className="group">
            {members.map((item, index) => (
              <div className="groupMember" key={index}>
                <a href={item.linkedin} target="_blank" rel="noreferrer">
                  <figure>
                    <img src={item.image} alt={item.name} />
                  </figure>
                </a>
                <div className="devInfo">
                  <p>{item.role}</p>
                  <p>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
};
