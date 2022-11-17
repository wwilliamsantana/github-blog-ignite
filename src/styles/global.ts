import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
  }

  body{
    background-color: ${(porps) => porps.theme['base-background']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
    font: 400 1rem Nunito, sans-serif;
  }

 
`
