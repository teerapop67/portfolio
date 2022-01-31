import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    a {
        text-decoration: none;
        color: var(--txt);

    }

    body {
        margin: 0;
        padding: 0;
        background: var(--bgBack);
        color: var(--txt);
    }

    * {
        box-sizing: border-box;
        font-family: 'Fira Code', monospace;    
    }
`;
