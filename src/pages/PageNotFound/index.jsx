import notFound from "../../assets/notfound.png";
import Header from "../../components/Header";
import sun from "../../assets/sun.png";
import { Container } from "./styles";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <Header
        setColor="var(--blue-sky)"
        setBorder="var(--blue-sky)"
        hideImage
      />

      <Container>
        <Link to="/">
          <figure className="sun">
            <img src={sun} alt="sun" />
          </figure>
        </Link>

        <div className="mainBox">
          <p className="notFoundText">This Page is Not on the Map</p>
          <figure className="mapGuy">
            <img src={notFound} alt="notFound" />
          </figure>
        </div>
      </Container>
    </>
  );
};

export default PageNotFound;
