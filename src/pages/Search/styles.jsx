import styled from 'styled-components';

export const ContainerPage = styled.div`
    background-image: var(--gradient-white);
`

export const ContainerSearch = styled.div`
    padding: 3% 4%;

    @media (max-width: 580px) {
        padding: 3% 7%;
    }
`

export const SearchBar = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--blue);
    border-radius: 10px;
    padding: 2% 0;

    @media (max-width: 580px) {
        flex-direction: column;

        input {
            margin: 5% 0;
            width: 200%;
        }
    }
`

export const ContainerCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1% 2%;
`