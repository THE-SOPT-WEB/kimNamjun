const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const burgerItem = $('.burger__card');
const cartItems = $('.cart__item');
const modal = $('.modal__background');

let addedItem = [];

//-------------------------------------------------

//과제 레퍼런스 1번 - 카트 기능 구현
function addItemToCart(selectedItem, selectedItemName) {
    const itemPrice = selectedItem.querySelector("p.burger__price").innerText;
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart__seleted-item");
    cartItem.innerHTML = `<h2>${selectedItemName}</h2>
    <input type="number" value="1" min="1" class="${selectedItemName}-amount cart-amount"/>
    <p class='cart__seleted-item-price'>${itemPrice}</p>
    <button type="button" class='cart__selected-removeBtn'>삭제</button>
    `;
    cartItems.appendChild(cartItem);
    cartItem.querySelector('.cart__selected-removeBtn').addEventListener("click", e => removeItem(e));
    //과제 레퍼런스 3번 - 삭제버튼 기능 구현
}
//아이템 클릭시 이벤트
function selectItem(e){
    const selectedItem = e.target.closest('.burger__card'); 
    const selectedItemName = selectedItem.querySelector('h3.burger__name').innerText;
    if ( !(addedItem.includes(selectedItemName)) ) { // 과제 레퍼런스 2번 - 기선택시 수량만 증가
        addedItem.push(selectedItemName);
        addItemToCart(selectedItem, selectedItemName);
    } else {
        quantityPlus(selectedItemName);
    };
    getTotalPrice()
}
// 삭제 기능 구현
function removeItem(e) { 
    e.currentTarget.closest("div").remove();
}
//수량 증가 기능
function quantityPlus(selectedItemName) {
    $(`.${selectedItemName}-amount`).value++;
}
//가격 파싱 기능
const parsePriceToNumber = (price) => {
    const removedComma = price.slice(0, -1).replace(/\D/g, "");
    return +removedComma;
};
//과제 레퍼런스 4번 - 가격 총합 얻기
function getTotalPrice(){
    let totalPrice = 0;
    const itemsInCart = $$('.cart__seleted-item');
    itemsInCart.forEach((item)=>{
        const price = parsePriceToNumber(item.querySelector('.cart__seleted-item-price').innerText);
        const amount = item.querySelector('.cart-amount').value;
        totalPrice += amount * price;
    });

    $('p.totalPrice').innerText = `${totalPrice}원`;
}

function attachClickEvent() { //과제 레퍼런스 1번 - 장바구니 요소 추가
    const itemCard = $$(".burger__card");
    const resetCart = $('.resetCart');
    itemCard.forEach( itemCard => itemCard.addEventListener("click", (e) => selectItem(e)));
    resetCart.addEventListener("click",() => removeAllitemsInCart(cartItems)); 
}

//과제 레퍼런스 5 번 - 비우기 버튼 클릭시 전부 비우기
function removeAllitemsInCart(cartItems){ 
    const allItems = $$('.cart__seleted-item');
    allItems.forEach((cartItem)=>{
        cartItems.remove(cartItem);
    });
    getTotalPrice();
}

//모달 열기
function openModal(){
    modal.classList.remove('hide');
}

//모달 닫기
function closeModal() {
    modal.classList.add('hide');
}

//과제 레퍼런스 6번 - 모달 세팅
function attachModalEvent (){
    const order = $('.order');
    const cancel = $('.cancel');
    order.addEventListener('click', openModal);
    cancel.addEventListener('click', closeModal);
}

function systemInit () {
    attachModalEvent();
    attachClickEvent();
}

systemInit();