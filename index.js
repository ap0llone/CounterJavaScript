const counterNode = document.querySelector('.js-counter');
const increaseBtnNode = document.querySelector('.js-increase-btn');
const clearBtnNode = document.querySelector('.js-clear-btn');

let counter = 0;
render();

function increase() {
    counter++;
}

function clear() {
    counter = 0;
}

function render(){
    counterNode.innerText = counter;
}

increaseBtnNode.addEventListener('click',function(){
    increase();
    render(); 
});

clearBtnNode.addEventListener('click',function(){
    clear();
    render();
})