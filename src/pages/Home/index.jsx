import members from "../../utils/groupMembers";
import Button from "../../components/Button";

export const Home = () => {
  return (
    <div>
      <div className="presentation"></div>

      <div className="forCompanies"></div>
      <div className="companiesBox">
        <div className="companiesTitle">
          <h2>For Companies</h2>
        </div>
        <div className="companiesTextBox">
          <div className="companiesText">
            <p>Go to our Search Engine...</p>
          </div>
          <div className="buttonBox">
          <Button 
              setColor="var(--grey)"
              setSize="large"
              setClick={""}>
            Search
          </Button>
          </div>
        </div>
      </div>

      <div className="forDevs">
        <div>
          <h2>and for DEVs</h2>
        </div>
        <img src="" alt="dev" />
        <p>
          You get templates to make easier to format your Resume. Companies will
          be able to check it for it in our search engine. You can also receive
          a message from them.
        </p>
      </div>

      <div className="aboutUs">
        <h2>About Us</h2>
        <div className="group">
          <div groupMember>
            <img src="" alt="" />
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
