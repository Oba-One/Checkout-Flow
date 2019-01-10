import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit; 
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; 
    }


    body {
        font-family: 'Lato', sans-serif;
    }
`;

export const theme = {
    colors: {
      lightGray: '#E2E2E2',
      charcoal: '#333333',
      black: '#000',
      cocoa: '#231815',
      silver: '#cbcbcb',
      sand: 'rgba(246,246,246,0.85)',
    },
    roundedCorners: {
      desktop: '10px',
      mobile: '7px',
    },
    gutters: {
      sm: 2,
      lg: 4,
    },
    breakpoints: {
      sm: '768px',
      med: '992px',
      lg: '1200px',
      max: '1920px',
    },
};


  