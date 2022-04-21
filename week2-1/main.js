import pic1 from "./assets/김규민.jpeg";
import pic2 from "./assets/전희선.jpeg";
import pic3 from "./assets/서혜은.jpg";
import pic4 from "./assets/황주희.jpeg";
import pic5 from "./assets/백지연.png";

const $ = (selector) => document.querySelector(selector);

let currentStep;

const quizList = [
  {
    src: pic1,
    answer: "김규민",
  },
  {
    src: pic2,
    answer: "전희선",
  },
  {
    src: pic3,
    answer: "서혜은",
  },
  {
    src: pic4,
    answer: "황주희",
  },
  {
    src: pic5,
    answer: "백지연",
  },
];

function initGame({score, image}){
  currentStep = 0;
  score.innerText = 0;
  image.src = quizList[currentStep].src;
}

function showModal(modalContent, keepOpen){
  const modal = $('.modal');
  const modalBody = $('p.modal__body');
  //심화과제 2번 구현사항
  modal.addEventListener('click', () => {modal.classList.add('hide')}); 
  modalBody.innerHTML = modalContent;
  modal.classList.remove('hide');
  if (keepOpen) return;
  setTimeout(()=>{
    modal.classList.add('hide');
  }, 500);
}
// 심화과제 1번 구현
function showLoadingModal(image){
    image.onload = () => {
      showModal(`
        로딩이라귯     
      `)
    }
}

function goNextStep(score, image){
  $('.scoreBoard').classList.remove('scored');
  currentStep++;
  score.innerText = +score.innerText + 1;
  $('.scoreBoard').classList.add('scored');
  if(currentStep === quizList.length){
    showModal(`
    <a href="/">메인화면으로</a>
  `, true)
  } else {
    showLoadingModal(image);
    image.src = quizList[currentStep].src;
  }
}

function attachEvent({score, image, answer, shuffle}){
  shuffle.addEventListener('click', ()=> {
    gameManager({score, image});
  });
  answer.addEventListener('click', (e)=> {
    if (e.target instanceof HTMLLIElement){
      const currentAnswer = e.target.innerText;
      const realAnswer = quizList[currentStep].answer;
      if (currentAnswer === realAnswer){
        goNextStep(score, image);
      }else {
        showModal(`나는 ${currentAnswer}이(가) 아니야!!`);
      }
    }
  });
}

function gameManager(gameInfo) {
  initGame(gameInfo);
  attachEvent(gameInfo);

}

window.onload = () => {
  gameManager(
    {
      score: $('.scoreBoard__score'),
      answer: $('ul.answer__list'),
      image: $('.imageBoard > img'),
      shuffle: $('.buttonList__shuffle'),
    }
  );
}
