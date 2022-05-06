import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { GameStyledBox } from './GameStyle';

const items = [
{
    id : 1,
    name :"케빈 데 브라이너",
    src : require("../img/데브라이너.jpeg"),
    score : "26경기 11골 6도움",
    review : "맨시티의 핵심선수이자 월드클래스 미드필더!",
    info : '30세 벨기에 맨체스터시티'

},
{
    id : 2,
    name :"킬리안 음바페",
    src : require("../img/음바페.jpg"),
    score : "32경기 24골 15도움",
    review : "메시, 호날두를 이을 차세대 월드클래스!!",
    info : '23세 프랑스 파리생제르망'
},
{
    id : 3,
    name :"모하메드 살라",
    src : require("../img/살라.jpeg"),
    score : "32경기 22골 13도움",
    review : "이집트의 국민 영웅 살라!!",
    info : "30세 이집트 리버풀"
},
{
    id :4,
    name :"카림 벤제마",
    src : require("../img/벤제마.jpg"),
    score : "30경기 26골 11도움",
    review : "이번시즌 발롱도르 수상 1순위!!",
    info : "34세 프랑스 레알마드리드"
},
{
    id : 5,
    name :"사디오 마네",
    src : require("../img/마네.jpeg"),
    score : "31경기 14골 2도움",
    review : "세네갈의 국민영웅!!",
    info : "30세 세네갈 리버풀"
},
{
    id : 6,
    name :"리오넬 메시",
    src : require("../img/리오넬메시.jpeg"),
    score : "23경기 4골 13도움",
    review : "설명이 필요없는 레전드",
    info : "34세 아르헨티나 파리생제르망"
},
{
    id : 7,
    name :"크리스티아누 호날두",
    src : require("../img/호날두.jpeg"),
    score : "29경기 18골 3도움",
    review : "킹갓두는 말할 필요가 없죠?",
    info : "37세 포르투갈 맨유"
},
{
    id : 8,
    name :"로베르트 레반도프스키",
    src : require("../img/레반도프스키.jpeg"),
    score : "32경기 34골 2도움",
    review : "폴란드산 득점기계",
    info : "33세 폴란드 바이에른뮌헨"
},

]

const Game = () => {
    const [players, setPlayers] = useState([]); //모든 선수를 담는 state
    const [nominees, setNominees] = useState([]); //화면에 띄울 2명을 담는 state  
    const [winners, setWinners] = useState([]); //게임의 승리자를 담는 state
    const [stage, setStage] = useState(items.length); //스테이지(8강,4강,결승)를 담는 state

    useEffect(() => {// 렌더링이 완료되면
        items.sort( () => Math.random() - 0.5 );//items 배열을 섞어서 (심화과제 구현사항 3번) 
        if (items){  
            setPlayers(items);// 그 배열을 players라는 state에 담고 
            setNominees([items[0], items[1]]);//랜덤으로 섞인 배열의 인덱스 기준 상위 2개 요소를 불러온다.
        }
    }, []);

    const PickPlayer = roundWinner => () => { //클릭시 이벤트 핸들러, 클릭한 플레이어를 함수로 전달해서 배열을 재구성한다.
        if(players.length <= 2){ // 남은 선수가 2명 이하이면서
            if(winners.length === 0){  // 라운드의 승자가 한명도 정해지지 않았을 경우에는(= 즉 결승일 경우)
                setNominees([roundWinner]); // 게임의 최종 승자가 출력된다. (nominees를 출력하니깐)
            }else {// 라운드의 승자가 한명이라도 있을 경우(= 8강, 4강의 마지막 경기일 경우)
                let wonPlayers = [...winners,roundWinner]; // 이전 라운드에서 진출한 선수만 모은 새로운 배열을 만들어준다.
                setPlayers(wonPlayers); // 이렇게 승자만 모은 배열을 Players에 새로 담는다.
                setNominees([wonPlayers[0],wonPlayers[1]]); // 승리한 선수들의 새 배열에서 인덱스 상위 2개를 출력한다. 
                setWinners([]); // 승자만 모아놓은 배열을 초기화 하고 다음라운드에 진출한다.
                setStage(stage/2);//다음 라운드를 저장한다.
            }
        } else if(players.length > 2){// 8강, 4강의 마지막 경기가 아닐 경우에는
            setWinners([...winners, roundWinner]); // 해당 라운드의 승자를 winner state의 winner 배열에 추가한다.
            setNominees([players[2],players[3]]);// 다음 대진표의 플레이어를 불러오고,
            setPlayers(players.slice(2)); // 기존배열에서 이미 고른 선수 두 명을 제거한다.
        }
    }

    return (
        <GameStyledBox>
            <h1 className='game__title'>유럽축구 21/22 시즌 올해의 선수는?</h1>
            {nominees && nominees.map( n => {
                return (
                    <div className='game__content' key={n.id} onClick={PickPlayer(n)}>
                        <div className='game__content__name'>{n.name}<hr></hr>
                            <p className='game__content__info'>{n.info}</p>
                            <p className='game__content__info'>{n.score}</p>
                        </div>
                        <img className="game__content__img" src={n.src} alt={n.name}/>
                    </div>
                )
            })};
            <div className="crown">{nominees.length === 1 ? "👑"  : null }</div> {/* 기본과제 3번 */}
            <div className='game__content__shortReview'>{nominees.length === 1 ? `${nominees[0].review}` : null}</div>
            <div className='game__content__round'>{stage === 2 && nominees.length !== 1 ? `결승` : nominees.length === 1 ? `우승자는!!` : `${stage}강-${winners.length+1}경기`} </div>
            {/* 심화과제 2번(새로고침), 위에 조잡한 삼항연산자 코드는 급해서 썼어요 고칠게요ㅠ */}
            <Link to="/"> 
                <button className='game__content__reset'>🔄</button> 
            </Link> 

        </GameStyledBox>
    );
}

export default Game;