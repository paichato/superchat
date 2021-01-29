import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
*{

padding: 0;
margin:0;
outline:0;
box-sizing: border-border-box;
}

body{
    background: #F0F0F5;
    /* background: linear-gradient(332.89deg, #FFFFFF -27.82%, #FAFAC6 32.46%, #F9A826 104.92%) no-repeat; */
    background-size:auto 1440px;
    -webkit-font-smoothing: antialiased;
}

body, input, button{
    font: 16px Roboto, sans-serif;
}
#root{
    margin:0 auto;
    padding:40px 20px;
}
button{
    cursor: pointer;
}

`

