import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @font-face {
     font-family: 'Dirtyline 36Daysoftype 2022';
     src: url('/assets/fonts/Dirtyline 36daysoftype 2022.ttf') format('truetype');
     font-weight: normal;
     font-style: normal;
  }

  @font-face {
     font-family: 'Gotic';
     src: url('/assets/fonts/Gothic60-Regular.otf') format('opentype');
     font-weight: normal;
     font-style: normal;
  }


  html {
    color: #000;
    font-size: 14px;
    font-family: 'Gotic', sans-serif; 
  }

  body {
    width: 100%;
    margin: 0;
    font-family: inherit;

    background-image: url('assets/images/BG.svg');
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center; 

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }

  input, select, button {
    color: #1D1E24;
    font-family: inherit;
    
    ::placeholder {
      color: inherit;
    }
  }
`;
