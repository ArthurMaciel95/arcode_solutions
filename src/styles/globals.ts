import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{

    --white-color:#ffffff;
    --primary-color:#496FF9;
    --secondary-color:#58bfff;
    --shadow-color:0px 4px 7px 2px rgba(161,161,161,0.21);
  
    --font-link-color:#576d96;
    --font-black-color:#313131;
    --font-gray-color:#7f7f7f;
    --font-white-ligth-color:#D3DDFF;
    --fs-lg-header:3rem;
    --fs-sm-header:2rem;
  }
  
  @keyframes spinning {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Fredoka, sans-serif;
    background-color: #F5F5F5;
    scroll-behavior: smooth;
  } 
  
  a {
    color: inherit;
    text-decoration: none;
  }
  h1,h2,h3,h4,h5,h6, p {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  
  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: #EEEEEE;
      background: #353535;
    }
  }
`;
