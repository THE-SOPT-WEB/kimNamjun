const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const parsePriceToNumber = (price) => {
    const removedComma = price.slice(0, -1).replace(/\D/g, "");
    return +removedComma;
};

const burgerItem = $('.burger__card');
const orderBtn = $('.order');
const cancelBtn = $('.cancel');
const modal = $('.modal__background');

let myItems = [];

//-------------------------------------------------



//6번 과제 레퍼런스
function closeModal() {
    modal.classList.remove('hide');
}

function openModal(){
    modal.classList.add('hide');
}

orderBtn.addEventListener('click',()=>{
    closeModal();
})

cancelBtn.addEventListener('click',()=>{
    openModal();
})
