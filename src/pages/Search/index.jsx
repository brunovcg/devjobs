import Header from '../../components/Header';
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
import API from "../../services/api";
import { useState, useEffect } from 'react';
import { useToken } from "../../providers/TokenProvider";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Search = () => {

  const { handleLogout } = useToken();
  const history = useHistory();

  const [users, setUsers] = useState([]);
  const [techSkills, setTechSkills] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [skill, setSkill] = useState("")
  const [level, setLevel] = useState("")

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

  const GetDevInfo = () => {
    API.get("/users").then((response) => setUsers(response.data));
    API.get(`/techSkills`).then((response) => setTechSkills(response.data));
  }

  const JoinInfo = () => {
    setSearchList([users, techSkills]);
  }
  
  const handleSearch = ({ description, level }) => {
    setSkill(description)
    setLevel(level)
    API.get(`/techSkills?description_like=${description}&level_like=${level}`)
    .then((response) => setTechSkills(response.data))
  }
  
  useEffect(() => {
    GetDevInfo()
    JoinInfo()
  }, [])
  
  console.log(searchList);
  console.log(skill, level)
  
  return (
    <>
      <Header 
        setRight={<Button
          setColor="var(--red)" setSize="large" setClick={sendToHome}
          >Logout</Button>
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
              <Button 
                type="submit" 
                setColor="var(--dark-grey)" 
                setSize="large" 
              >Search</Button>
            </form>
          </SearchBar>
        </ContainerSearch>
        <ContainerCards>
          {
            users.map(user => (
              <CardDev
                key={user.id}
                name={`${user.firstName} ${user.lastName}`}
              />
            ))
          }
        </ContainerCards>
      </ContainerPage>
    </>
  );
};

export default Search;
