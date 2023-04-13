import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
    --primary: #7941f5;
    --secondary: #e0ddfc;
    --darkgrey: #d9d9d9;
    --lightgrey: #f6f6f6;

}
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body{
        background-color: var(--lightgrey);
        font-family: 'Lato', sans-serif;
    }
    h1{
        font-size: 2rem;
    }
    span{
        color: var(--primary);
    }
    p{
        color: grey;
    }
    button, input{
        font-family: inherit;
        padding: 0.75rem 1rem;
        border-radius: 10px;
        border: none;
        font-size: 1rem;
    }
    img{
        display: block;
        max-width: 100%;
    }
    .flex, .flex-col{
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .flex-col{
        flex-direction: column;
    }
    .column{
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .column-md{
        width: 40%;
    }
     .column-sm{
        width: 20%;
    }
    .App{
        align-items: flex-start;
    }
`;
