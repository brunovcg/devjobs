import styled from "styled-components";

export const ContainerPage = styled.div`
    background-image: var(--gradient-white);
`

export const ContainerOptions = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10%;
`

export const ContainerTitleImg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 30vh;
    font-size: 1.7rem;
    color: var(--dark-grey);

    a {
        text-align: center;
        padding: 10% 0;
    }
`

export const StyledImg = styled.img`
    width: 50%;
    height: 100%;
    transition: 0.5s;

    :hover {
        opacity: 70%;
        transform: translateY(5%);
        transition: 0.5s;
    }
`