import Header from '../../components/Header';
import Button from "../../components/Button";
import Select from "../../components/Select";
import { disponibility, seniority, specialization } from "../../utils/index";
import {
  ContainerPage,
  ContainerSearch,
  ContainerCards,
  SearchBar,
} from "./styles";
import CardDev from "../../components/CardDev";
import API from "../../services/api";
import { useState, useEffect } from 'react';

const Search = () => {

  const [users, setUsers] = useState([]);
  const [searchSpecialization, setSearchSpecialization] = useState('');
  const [searchSeniority, setSearchSeniority] = useState('');
  const [searchDisponibility, setSearchDisponibility] = useState('');
  const [searchDevList, setSearchDevList] = useState([]);

  const GetDev = () => {
    API.get("/db").then((response) => setUsers(response.data.users));
  }

  const handleSearch = () => {
    const searchFilter = users.filter(user => user.summary.speciality === searchSpecialization)
  }
  
  useEffect(() => {
    GetDev()
  }, [])

  console.log(searchSpecialization)
  console.log(searchSeniority)
  console.log(searchDisponibility)

  return (
    <>
      <Header 
        setRight={<Button
          setColor="var(--red)" setSize="large" setClick={""}
          >Logout</Button>
        }
      />
      <ContainerPage>
        <ContainerSearch>
          <SearchBar>
            <Select options={specialization} value={searchSpecialization} onChange={(event) => setSearchSpecialization(event.target.value)}/>
            <Select options={seniority} value={searchSeniority} onChange={(event) => setSearchSeniority(event.target.value)}/>
            <Select options={disponibility} value={searchDisponibility} onChange={(event) => setSearchDisponibility(event.target.value)}/>
            <Button setColor="var(--dark-grey)" setSize="large" setClick={""}>
              Search
            </Button>
          </SearchBar>
        </ContainerSearch>
        <ContainerCards>
          {
            users.map(user => (
              user.summary &&
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
