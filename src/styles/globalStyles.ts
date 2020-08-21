import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        color: var(--secondary);
    }

    html,body,#root {
        width:100%;
        height:100%;
    }

    #root {
        padding: 35px 45px;
    }

    :root {
        --primary:#FFF;
        --secondary: #212121;
        --tertiary: #424242;
        --grey: #9E9E9E;
    }
`