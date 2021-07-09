import { styled } from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    text-align: center;

    h2{
        color: white;
        margin-bottom: 15px;
    }

    @media(min-width: 768px){
        width: 80%;
        max-width: 550px;
        background: var(--dark-grey);
        border-radius: 15px;
    }
`

export const FormStyled = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;

    input{
        margin-bottom: 15px;   
    }
`

export const Text = styled.p`
    text-align: center;
    margin-top: 15px;
`