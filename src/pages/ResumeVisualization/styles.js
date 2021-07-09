import styled from "styled-components";

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

export const ContainerPage = styled.div`
    background-image: var(--gradient-white);
    width: 100vw;
    height: 100vh;
    font-family: "Gugi", serif;
`

export const ContainerSumary = styled.div`
    padding: 35px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`

export const ContainerName = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: flex-start;
`

export const ContainerAddress = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: flex-end;
`

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
`

export const ContainerDescription = styled.div`
    width: 90vw;
    max-height:25vh;
    background-color: var(--grey);
`

export const ContainerInfos = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3%;
`

export const ContainerSkills = styled.div`
    width: 90vw;
    display: flex;
    max-height:10vh;
    flex-wrap: wrap;
    flex-direction: column;
    background-color: var(--grey);
`