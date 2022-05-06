import React from 'react';
import { Link } from 'react-router-dom';
import { HomeStyleBox } from './MainStyle';

const Home = () => {
    return (
        <HomeStyleBox>
            <div className="home__header"></div>
            <div className="home__content">
                <Link to="/game"><button>게임합시다</button></Link>
            </div>
        </HomeStyleBox>
    );
};


export default Home;