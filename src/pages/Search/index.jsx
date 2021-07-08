import { ContainerSearch, SearchBar, ContainerCards } from './styles';

const Search = () => {
    return (
        <>
            <p>Header - another feature to be developed</p>
            <ContainerSearch>
                <SearchBar>
                    <input placeholder='Techs'/>
                    <input placeholder='Specialization'/>
                    <input placeholder='Seniority'/>
                    <input placeholder='Disponibility'/>
                    <button>Search</button>
                </SearchBar>
            </ContainerSearch>
            <ContainerCards>
                <p>Cards Users - another feature to be developed</p>
            </ContainerCards>
        </>
    )
}

export default Search;