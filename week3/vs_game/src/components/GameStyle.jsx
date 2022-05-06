import styled from 'styled-components';

export const GameStyledBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    .game__title{
        position: absolute;
        z-index:2;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: #fff;
        padding: 0 30px;
    }
    .game__content{
        flex : 1;
        background-color: black;
        position: relative;
        overflow : hidden;
        min-width: 500px;
    }
    .game__content__img{
        width: 100%;
        height: 100%;
        cursor: pointer;
        transition: all 0.5s;
        &:hover{
            transform:scale(1.1);
            opacity: 0.7;
        }
    }
    .game__content__name{
        position: absolute;
        z-index: 3;
        color: #fff;
        bottom: 15%;
        font-size:60px;
        left: 50%;
        text-align: center;
        transform: translateX(-50%);
    }

    .game__content__info{
        font-size: 1.5rem;
    }
    .game__content__reset{
        position: absolute;
        font-size: 35px;
        background-color: white;
        bottom: 5%;
        right: 3%;
        padding: 0px 10px;
        cursor: pointer;
        border-radius:15px;
        transition: all 0.5s;
        &:hover{
            transform:scale(1.1);
        }
    }
    .game__content__round{
        position: absolute;
        font-size:50px;
        background-color: white;
        bottom: 0;
        right: 50%;
        padding: 0px 10px;
        cursor: pointer;
        border-radius:15px 15px 0 0;
        transform: translateX(50%);
    }
`

