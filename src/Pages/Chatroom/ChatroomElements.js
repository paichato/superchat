import styled from 'styled-components';

export const Chating=styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction:column;
background:white;
width:400px;
height:700px;
border-radius:5px;
padding:20px;
padding-top:80px;
box-shadow: 4px 4px 8px rgba(0,0,0,0.2);
border: 3px solid #BA75FF;
margin-left: 50px;

#chatmessages{
    flex-direction:column;
    
    
}

form {

margin-top: 20px;
align-items:color-interpolation-filters;
justify-content:center;

    input{
        width:280px;
        height:50px;
        /* border: 2.5px solid #BA75FF; */
        border-right: none;
        background:#383838;
        color:white;
        outline: none;
        border: none;
        border-radius: 2px 0px 0px 2px;
        

    } 
    button{
        width:100px;
        height:50px;
        /* border: 2px solid #E98A15; */
        background:#BA75FF;
        outline: none;
        border-radius: 0px 2px 2px 0;
        font-weight:bold;
        border-left: none;
        border:none;
        padding:5px;
        color:white;
    }
}
             
        


`

export const Chatmessages1=styled.div`
display:flex;
justify-content:space-between;
/* background:#FFFF; */
height:100px;
align-items:center;
flex-direction:row;

img{
    width:40px;
    height:40px;
    border-radius:50%;
}

p{
    flex:1;
    /* flex-direction: row;
    flex:1;
    display:flex; */
    background:#F0F0F5;
    width:300px;
    
    padding:10px;
    border-radius:0px 10px 10px 10px;
    /* box-shadow: 4px 4px 8px rgba(0,0,0,0.1); */

    & + p{
        margin-top:30px;
    }
}
`