import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        background-color: whitesmoke;
        font-family: 'Lato', sans-serif;
    }
    h1{
        font-size: 2rem;
    }
    p{
        color: grey;
    }
    button, input{
        font-family: inherit;
    }

    .flex, .flex-col{
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .flex-col{
        flex-direction: column;
    }
    .App{
        align-items: flex-start;
    }
`;