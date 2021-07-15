import Header from "../../components/Header";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { languages, levelSkills } from "../../utils/index";
import {
  ContainerPage,
  ContainerSearch,
  ContainerCards,
  SearchBar,
} from "./styles";
import CardDev from "../../components/CardDev";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useToken } from "../../providers/TokenProvider";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

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
        console.log(res.data);
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
      <ContainerPage>
        <ContainerSearch>
          <SearchBar>
            <form onSubmit={handleSubmit(handleSearch)}>
              <h3>Choose language and level</h3>
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
                error={errors.description?.message}
                setHeight="60px"
                setWidth="100%"
              />
              <Button type="submit" setColor="var(--dark-grey)" setSize="large">
                Search
              </Button>
            </form>
          </SearchBar>
        </ContainerSearch>
        <ContainerCards>
          {userRequest
            .filter((user) => techRequest.includes(user.userId))
            .map((userX) => (
              <div className="cardDevBox" key={userX.id}>
                <CardDev
                  name={`${userX.firstName} ${userX.lastName}`}
                  phone={userX.phone}
                  email={userX.email}
                  userId={userX.id}
                />
              </div>
            ))}
        </ContainerCards>
      </ContainerPage>
    </>
  );
};

export default Search;
