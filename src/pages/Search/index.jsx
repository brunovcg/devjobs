import Header from "../../components/Header";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { languages, levelSkills } from "../../utils/index";
import { Container } from "./styles";
import CardDev from "../../components/CardDev";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useToken } from "../../providers/TokenProvider";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Search = () => {
  const { handleLogout } = useToken();
  const history = useHistory();

  const [techRequest, setTechRequest] = useState([]);
  const [userRequest, setUserRequest] = useState([]);

  const schema = yup.object().shape({
    description: yup.string().required("Description required"),
    level: yup.string().required("Level required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendToHome = () => {
    handleLogout();
    history.push("/");
  };

  const handleSearch = ({ description, level }) => {
    api
      .get(`/techSkills?description_like=${description}&level_like=${level}`)
      .then((res) => {
        setTechRequest(res.data.map((item) => item.userId.toString()));
        reset();
        if (JSON.stringify(res.data) === "[]") {
          toast.error("The are no results for this search, try again!");
        } else {
          toast.info("Showing results");
        }
      });
  };

  const getUsers = () => {
    api.get("/users").then((res) => {
      setUserRequest(res.data);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Header
        setRight={
          <Button setColor="var(--red)" setSize="large" setClick={sendToHome}>
            Logout
          </Button>
        }
      />
      <Container>
        <div className="containerSearch">
          <form onSubmit={handleSubmit(handleSearch)}>
            <div className="selectBox">
              <Select
                name="description"
                options={languages}
                register={register}
                error={errors.description?.message}
                setHeight="60px"
                setWidth="100%"
              />
              <Select
                name="level"
                options={levelSkills}
                register={register}
                error={errors.level?.message}
                setHeight="60px"
                setWidth="100%"
              />
            </div>
            <div className="buttonBox">
              <Button type="submit" setColor="var(--dark-grey)" setSize="large">
                Search
              </Button>
            </div>
          </form>
        </div>
        <div className="cardContainer">
          {userRequest
            .filter((user) => techRequest.includes(user.userId))
            .map((userX) => (
              <div className="cardDevBox" key={userX.id}>
                <CardDev
                  name={`${userX.firstName} ${userX.lastName}`}
                  phone={userX.phone}
                  userId={userX.id}
                  address={userX.address}
                  linkedinProfile={userX.linkedinProfile}
                  email={userX.email}
                  objective={userX.objective}
                  birthDate={userX.birthDate}
                />
              </div>
            ))}
        </div>
      </Container>
    </>
  );
};

export default Search;
