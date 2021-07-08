import Button from "../../components/Button";
import dev from "../../assets/dev.png";
import resumeHome from "../../assets/resumeHome.png";
import notebook from "../../assets/notebook.png";
import { members } from "../../utils/groupMembers";
import {Container} from './styles'

export const Home = () => {
  return (
    <Container>
      <section className="presentation">
        <img src={notebook} alt="" />
      </section>

      <section className="forCompanies">
        <div className="companiesTitle">
            <h2>For Companies</h2>
          <div className="companiesTitleBox">
            <p>Go to our Search Engine...</p>
            <div className="buttonBox">
              <Button setColor="var(--grey)" setSize="large" setClick={""}>
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="companiesText">
            <p>You can search easily form DEVs with the skills needed using our filters.</p>
            <img src={resumeHome} alt="resumeHome" />
        </div>
      </section>

      <section className="forDevs">
        <div className="forDevsTitle">
          <h2>and for DEVs</h2>
        </div>
        <div className="forDevsText">
          <img src={dev} alt="dev" />
          <p>
            You get templates to make easier to format your Resume. Companies
            will be able to check it for it in our search engine. You can also
            receive a message from them.
          </p>
        </div>
      </section>

      <section className="aboutUs">
        <h2>About Us</h2>
        <button onClick={() => console.log(members)}>teste</button>
        <div className="group">
          {members.map((item, index) => (
            <div className="groupMember" key={index}>
              <img src={item.image} alt={item.name} />
              <div>
                <p>{item.role}</p>
                <p>{item.name}</p>
                <a href={item.role}>Linked-In</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
