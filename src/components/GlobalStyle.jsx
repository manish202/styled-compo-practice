import {createGlobalStyle} from "styled-components";
const GlobalStyle = createGlobalStyle`
    *{
        margin:0px;
        padding:0px;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: "Dosis", sans-serif;
        font-optical-sizing: auto;
        font-weight: 800;
        font-style: normal;
    }
    body{
        background-color: ${({theme}) => theme.colors.bg}
    }
    h1{
        color: ${({theme}) => theme.colors.text}
    }
`;
export default GlobalStyle;