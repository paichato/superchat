import styled from 'styled-components';

export const Welcome=styled.div`

header{
max-width:250px;
display:flex;
flex-direction:row;
position: relative;
justify-content:space-evenly;


    img{
        max-width:80px;
        height:80px;
    }
    p{
       
        margin-top: 30px; 
        padding: 0 15px 0 0;
        font: 24px 'Red Hat Display';
        font-weight: bold;
    }
}

#main{
    justify-content:center;
    align-items:center;
    display: flex;
    grid-template-columns:1fr 1fr;

    section{
        flex-direction: column;
        max-width:440px;
        height:600px;
        background:#FFF;
        border-radius: 17px;
        padding: 10px;
        box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.25);

        img{
            margin: 0 150px 0 150px;
        }
    }
    #right{

    }
}




`

