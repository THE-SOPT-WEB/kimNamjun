import styled from 'styled-components';

export const MainStyledBox = styled.div`
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
        transition: 0.5s;
        &:hover{
            transform:scale(1.1);
            opacity: 0.7;
        }
    }
    .game__content__name{
        position: absolute;
        z-index: 3;
        color: #fff;
        bottom: 20%;
        font-size:60px;
        left: 50%;
        text-align: center;
        transform: translateX(-50%);
    }

    .game__content__info{
        font-size: 35px;
    }

`

