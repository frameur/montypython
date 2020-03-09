// le carousel 

const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.btn');
const options = document.querySelectorAll('.option');
const slides = document.querySelectorAll('.img');

var index = 1;
var size = slides[index].clientWidth;

uptade();

function uptade(){
    slider.style.transfom = "translatex("+(-size * index) *"px)";

}

function btnCheck(){
    if(this.id === "prev"){
        index--;
    }
    else if(this.id === "next"){
        index++;
    }
}

buttons.forEach(btn => btn.addEventListener)