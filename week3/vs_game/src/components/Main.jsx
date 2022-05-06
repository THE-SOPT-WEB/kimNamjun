import React from 'react';
import { Link } from 'react-router-dom';
import { MainStyleBox } from './MainStyle';

const Main = () => {
    return (
        <MainStyleBox>
            <div>
                <Link to="/game">
                    <button>게임합시다</button>
                </Link>
            </div>
        </MainStyleBox>
    );
};


export default Main;