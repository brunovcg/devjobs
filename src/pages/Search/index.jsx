// import Header from '../../components/Header';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {ContainerSearch, ContainerCards, SearchBar} from "./styles";

const Search = () => {
    return (
        <>
            {/* <Header/> */}
            <ContainerSearch>
                <SearchBar>
                    <Input setHeight="10%" setWidth="20%" placeholder='Techs'/>
                    <Input setHeight="20%" setWidth="20%" placeholder='Specialization'/>
                    <Input setHeight="20%" setWidth="20%" placeholder='Seniority'/>
                    <Input setHeight="20%" setWidth="20%" placeholder='Disponibility'/>
                    <Button setColor="var(--blue)" setSize="large" setClick={""}>Search</Button>
                </SearchBar>
            </ContainerSearch>
            <ContainerCards>
                <p>Cards Users - another feature to be developed</p>
            </ContainerCards>
        </>
    )
}

export default Search;