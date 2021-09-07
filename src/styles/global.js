import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }

  body{
    background: ${props => props.theme.current.colors.background};
    padding: 0 10rem;
  }

  html{
    font-size: 190%;
  }

  @media (max-width: 2375px) {
    html {
      font-size: 175%;
    }
  }

  @media (max-width: 2050px) {
    html {
      font-size: 150%;
    }
  }

  @media (max-width: 1800px) {
    html {
      font-size: 125%;
    }
  }

  @media (max-width: 1540px) {
    html {
      font-size: 100%;
    }
  }

  @media (max-width: 1080px) {
    html {
      font-size: 87.5%;
    }
  }

  @media (max-width: 950px) {
    html {
      font-size: 75%;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }

    body{
      padding: 0 3rem;
    }
  }

  @media (max-width: 425px) {
    body{
      padding: 0 1rem;
    }
  }

  @media (max-width: 375px) {
    html {
      font-size: 75%;
    }
  }
`
