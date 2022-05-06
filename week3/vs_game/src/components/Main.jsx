import React from 'react';
import { Link } from 'react-router-dom';
import { HomeStyleBox } from './MainStyle';
import trophy  from '../img/발롱도르.jpeg';

const Home = () => {
    return (
        <HomeStyleBox>
            <div className="home__header">
                <h1 className='home__header__title'>2022 올해의 축구선수는?</h1>
            </div>
            <div className="home__content">
                <img className='home__content__img' src={trophy} alt='발롱도르 트로피'/>
                <div className='home__content__description'>
                    <p>시즌 종료까지 1달 남은 현재, 누가 올해의 선수상을 받을까요오?</p>
                </div>
                <Link to="/game"><button className="home__content__button">골라보시죠</button></Link>
            </div>
        </HomeStyleBox>
    );
};


export default Home;