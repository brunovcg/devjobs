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
import { useState } from 'react';

const Search = () => {

  const [users, setUsers] = useState([])
  const [sumary, setSumary] = useState([]);

  const GetDev = () => {
    API.get("/db").then((response) => setUsers([response.data.users]));
  }

  const GetSumaryDev = () => {
    API.get("/db").then((response) => setSumary([response.data.sumary]));
  }

  const Get = () => {
    GetDev();
    GetSumaryDev();
  }
  
  console.log(users);
  console.log(sumary);

  return (
    <>
      <Header />
      <ContainerPage>
        <button onClick={Get}>API</button>
        <ContainerSearch>
          <SearchBar>
            <Input setHeight="10%" setWidth="20%" placeholder="Techs" />
            <Input
              setHeight="20%"
              setWidth="20%"
              placeholder="Specialization"
            />
            <Input setHeight="20%" setWidth="20%" placeholder="Seniority" />
            <Input setHeight="20%" setWidth="20%" placeholder="Disponibility" />
            <Button setColor="var(--blue)" setSize="large" setClick={""}>
              Search
            </Button>
          </SearchBar>
        </ContainerSearch>
        <ContainerCards>
          <CardDev/>
          <CardDev/>
          <CardDev/>
          <CardDev/>
        </ContainerCards>
      </ContainerPage>
    </>
  );
};

export default Search;
