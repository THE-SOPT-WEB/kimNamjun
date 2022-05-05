import React, {useState, useEffect} from 'react';
import { MainStyledBox } from './style';

const items = [
{
    id : 1,
    name :"케빈 데 브라이너",
    src : require("../img/데브라이너.jpeg"),
    score : "26경기 11골 6도움",
    role : '공격형 미드필더',
    info : '30세 벨기에 맨체스터시티'

},
{
    id : 2,
    name :"킬리안 음바페",
    src : require("../img/음바페.jpg"),
    score : "32경기 24골 15도움",
    role : '스트라이커',
    info : '23세 프랑스 파리생제르망'
},
{
    id : 3,
    name :"모하메드 살라",
    src : require("../img/살라.jpeg"),
    score : "32경기 22골 13도움",
    role : "윙어",
    info : "30세 이집트 리버풀"
},
{
    id :4,
    name :"카림 벤제마",
    src : require("../img/벤제마.jpg"),
    score : "30경기 26골 11도움",
    role : "스트라이커",
    info : "34세 프랑스 레알마드리드"
},
{
    id : 5,
    name :"사디오 마네",
    src : require("../img/마네.jpeg"),
    score : "31경기 14골 2도움",
    role : "윙어",
    info : "30세 세네갈 리버풀"
},
{
    id : 6,
    name :"리오넬 메시",
    src : require("../img/리오넬메시.jpeg"),
    score : "23경기 4골 13도움",
    role : "윙어",
    info : "34세 아르헨티나 파리생제르망"
},
{
    id : 7,
    name :"크리스티아누 호날두",
    src : require("../img/호날두.jpeg"),
    score : "29경기 18골 3도움",
    role : "스트라이커",
    info : "37세 포르투갈 맨체스터유나이티드"
},
{
    id : 8,
    name :"로베르트 레반도프스키",
    src : require("../img/레반도프스키.jpeg"),
    score : "32경기 34골 2도움",
    role : "스트라이커",
    info : "33세 폴란드 바이에른뮌헨"
},

]

const Game = () => {
    const [players, setPlayers] = useState([]);
    const [nominees, setNominees] = useState([]);

    useEffect(() => {
        items.sort( () => Math.random() - 0.5 );
        if (items){     
            setPlayers(items);
            setNominees([items[0], items[1]]);
        }
    }, []);

    return (
        <MainStyledBox>
            <h1 className='game__title'>유럽축구 21/22 시즌 올해의 선수는?</h1>
            {nominees && nominees.map( n => {
                return (
                    <div className='game__content' key={n.id}>
                        <div className='game__content__name'>{n.name}<hr></hr>
                            <p className='game__content__info'>{n.info}</p>
                            <p className='game__content__info'>{n.score}</p>
                        </div>
                        <img className="game__content__img" src={n.src} alt={n.name}/>
                    </div>
                )
            })};
        </MainStyledBox>
    );
}

export default Game;