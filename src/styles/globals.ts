import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
  --background-color:#fff;
    --white-color:#ffffff;
    --primary-color:#496FF9;
    --secondary-color:#58bfff;
    --shadow-color:0px 4px 7px 2px rgba(161,161,161,0.21);
    --tags-color:#09749d;
    --font-link-color:#576d96;
    --font-black-color:#313131;
    --font-gray-color:#505050;
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
    font-family: "Fredoka", sans-serif !important;
    background-color: var(---background-color);
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
:root{

  --background-color:#353535;
  --white-color:#ffffff;
  --primary-color:#496FF9;
    --secondary-color:#58bfff;
    --shadow-color:0px 4px 7px 2px rgba(161,161,161,0.21);
    --tags-color:#09749d;
    --font-link-color:#576d96;
    --font-black-color:#f2f2f2;
    --font-gray-color:#a1a1a1;
    --font-white-ligth-color:#D3DDFF;
    --fs-lg-header:3rem;
    --fs-sm-header:2rem;
    --gradient-primary-colors: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
}

    html {
      color-scheme: dark;
    }
    body {
    
      background: var(---background-color);
    }
  }

  .title-sections{
    font-size: 3rem;
    margin-top: 68px;
    text-align: center;
    margin-bottom: 41px;
    background: -webkit-linear-gradient(bottom, #496ff9, #58bfff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
