// import Header from '../../components/Header';
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  ContainerPage,
  ContainerSearch,
  ContainerCards,
  SearchBar,
} from "./styles";
import Header from "../../components/Header";
import CardDev from "../../components/CardDev";
import API from "../../services/api";
import { useState, useEffect } from 'react';

const Search = () => {

  const [users, setUsers] = useState([])

  const GetDev = () => {
    API.get("/db").then((response) => setUsers(response.data.users));
  }
  
  useEffect(() => {
    GetDev()
  }, [])

  return (
    <>
      <Header />
      <ContainerPage>
        <ContainerSearch>
          <SearchBar>
            {/* <Input setHeight="10%" setWidth="20%" placeholder="Techs" />
            <Input
              setHeight="20%"
              setWidth="20%"
              placeholder="Specialization"
            />
            <Input setHeight="20%" setWidth="100%" placeholder="Seniority" />
            <Input setHeight="20%" setWidth="20%" placeholder="Disponibility" /> */}
            <Button setColor="var(--blue)" setSize="large" setClick={""}>
              Search
            </Button>
          </SearchBar>
        </ContainerSearch>
        <ContainerCards>
          {
            users.map((user) => (
              <CardDev
                key={user.id}
                name={`${user.firstName} ${user.lastName}`}
                city={user.summary.city}
                speciality={user.summary.speciality}
                disponibility={user.summary.disponibility}
                experience={`${user.summary.experienceTime} months`}
              />
            ))
          }
        </ContainerCards>
      </ContainerPage>
    </>
  );
};

export default Search;
