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
        setLeft={<HeaderLink setName="For Companies" setPath="/company-register" />}
        setRight={<HeaderLink setName="For Devs" setPath="/login"/>}
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
              <p>Go to our Search Engine...</p>
              <div className="buttonBox">
                <Button setColor="var(--grey)" setSize="large" setClick={""}>
                  Search
                </Button>
              </div>
            </div>
          </article>

          <article className="companiesText">
            <p>
              You can search easily form DEVs with the skills needed using our
              filters.
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
              You get templates to make easier to format your Resume. Companies
              will be able to check it for it in our search engine. You can also
              receive a message from them.
            </p>
          </article>
        </section>

        <section className="aboutUs">
          <h2>About Us</h2>
          <p>Click photos to check linked-in</p>

          <div className="group">
            {members.map((item, index) => (
              <div className="groupMember" key={index}>
                <a href={item.linkedin} target="_blank" rel="noreferrer">
                  <figure>
                    <img src={item.image} alt={item.name} />
                  </figure>
                </a>
                <p>{item.role}</p>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
};
