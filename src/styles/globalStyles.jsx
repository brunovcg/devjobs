import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    :root {

        --blue: #003F7D;
        --gradient-white: linear-gradient(180deg, #ECECEC 0%, #FFFFFF 100%);
        --dark-grey: #404040;
        --grey: #C4C4C4;
        --light-grey: #E9EEF1;
        --red: #DC4F44;
        --white: #fff;
        --gradient-sunny: linear-gradient(180deg, #75D8EE 0%, #E0B35C 51.04%, #FFE27C 100%);
        --yellow: #FDCC12;      
        --blue-sky: #75D8EE;
        --grey-header: #ececec;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, button, h3, h4, h5, h6, p{
        font-family: 'Cormorant', serif;
    }

    h1 {
        font-family: 'Gugi', serif;
        color: var(--white);
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }





`;
