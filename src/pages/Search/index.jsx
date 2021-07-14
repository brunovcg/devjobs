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

  const [users, setUsers] = useState([])

  const GetDev = () => {
    API.get("/db").then((response) => setUsers(response.data.users));
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
            <Select options={specialization}/>
            <Select options={seniority}/>
            <Select options={disponibility}/>
            <Button setColor="var(--dark-grey)" setSize="large" setClick={""}>
              Search
            </Button>
          </SearchBar>
        </ContainerSearch>
        <ContainerCards>
          {
            users.map((user) => (
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
