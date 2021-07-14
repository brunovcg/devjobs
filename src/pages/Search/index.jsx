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

const Search = () => {

  const [users, setUsers] = useState([]);
  const [searchLanguages, setSearchLanguages] = useState('');
  const [searchLevelSkills, setSearchLevelSkills] = useState('');
  const [searchList, setSearchList] = useState([]);

  const GetDev = () => {
    API.get("/db").then((response) => setUsers(response.data.users));
  }

  const handleSearch = () => {
    console.log(`language ${searchLanguages}`);
    console.log(`level skill ${searchLevelSkills}`);
  }
  
  useEffect(() => {
    GetDev()
  }, [])

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
            <Select options={languages} setSearchLanguages={languages}/>
            <Select options={levelSkills} inputValue={searchLevelSkills} onChange={(event) => setSearchLevelSkills(event.target.value)}/>
            <Button setColor="var(--dark-grey)" setSize="large" setClick={handleSearch}>
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
