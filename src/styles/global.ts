import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #f0f0f0
    }
    body{
        margin: 0;
        padding: 0;
    }

    .root {
        display: flex;
    }

    iframe {
        border: 0;
    }

    .context {
        display: flex;
        padding: 1% 1% 0% 10%;
        justify-content: space-between;
        align-items: flex-start;
    }

    .text h1{
        margin-bottom:0 ;
    }

    .text p{
        margin-top:0 ;
        margin-bottom:0 ;
    }

    select {
        position: relative; 
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: var(--background);
        padding: 8px 15px;
        width: 100%;
      }
`