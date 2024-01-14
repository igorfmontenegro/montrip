import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    
}

#root{
    height: 400vh;
    overflow-x: hidden;
    font-family: 'Poppins', sans-serif;
}

section{
    scroll-margin-top: 105px;
}
`
