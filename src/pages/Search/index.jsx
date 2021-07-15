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
import { useResume } from "../../providers/ResumeDownload";

const Search = () => {

  const [users, setUsers] = useState([]);
  const [searchLanguages, setSearchLanguages] = useState('');
  const [searchLevelSkills, setSearchLevelSkills] = useState('');
  const [searchList, setSearchList] = useResume();

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

  console.log(users)

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
            <Select options={languages}/>
            <Select options={levelSkills}/>
            <Button setColor="var(--dark-grey)" setSize="large" setClick={handleSearch}>
              Search
            </Button>
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
