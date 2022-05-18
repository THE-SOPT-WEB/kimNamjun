import styled from 'styled-components';

export const HomeStyleBox = styled.div`
    
    .home__header{
        position: relative;
        height: 20vh;
        background-color:black;
        color:white;
    }
    .home__header__title{
        position: absolute;
        font-size:60px;
        right: 50%;
        top: 20%;
        transform: translateX(50%);
    }
    .home__content{
        position: relative;
        height: 80vh;
    }
    .home__content__description{
        position: absolute;
        bottom: 20%;
        left: 50%;
        font-size: 25px;
        transform: translateX(-50%);
    }

    .home__content__img{
        position: absolute;
        width:300px;
        height:300px;
        top:10%;
        left: 50%;
        transform: translateX(-50%);
    }

    .home__content__button{
        font-family: "swaggerTTF", "Helvetica", "Arial", sans-serif;
        position: absolute;
        bottom:8%;
        left: 50%;
        transform: translateX(-50%);
        background-color:black;
        border-radius: 15px;
        color: white;
        font-size:25px;
        padding: 10px;
    }
`