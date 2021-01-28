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
    margin-top: 80px;
    justify-content:center;
    align-items:center;
    display: flex;
    grid-template-columns:1fr 1fr;


    section{
        color:#3A3A3A;
        flex-direction: column;
        width:340px;
        height:600px;
        background:#FFF;
        border-radius: 17px;
        padding: 10px;
        box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.25);

        img{
            margin: 30px 140px 0 140px;
        }

        h1{
            margin: 50px 0 0 50px;
            font-size:20px;
            
            
        }

        p{
            color:#A8A8B3;
            margin-left:80px;
            margin-top: 20px;
            width:200px;
        }
        a{
            display: flex;
            align-items:center;
            justify-content:center;
            width:200px;
            height:40px;
            background: linear-gradient(91.96deg, #3913B8 0%, #BA75FF 100%);
            background: #FFF;
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
            border-radius: 4px;
            margin-top: 40px;
            margin-left: 70px;
            color: white;
            text-decoration:none;
            border:none;
            font-weight:bold;
            border:1px solid #BA75FF;
            color:#BA75FF;

        }
        button{
            display: flex;
            align-items:center;
            justify-content:center;
            width:200px;
            height:40px;
            background: #2F80ED;
            box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
            border-radius: 4px;
            margin-top: 20px;
            margin-left: 70px;
            color: white;
            text-decoration:none;
            border:none;
            font-weight: bold;
        }

    }
    #right{
        margin-left:200px;
        img{
            width:100%;
            height:100%;
        }
        p{
            width:500px;
            margin-left:60px;
            color:#3A3A3A;
        }
        small{
            margin-left: 200px;
            margin-top:40px;
            color:#3A3A3A;
            font-style:italic;
        }
    }
}




`

