//le python temps
var d = new Date("2020-03-14T14:15:00Z")
console.log(d);


function refreshTime(){
var tempsCourant = document.getElementById("temps-actuel"); 
    var d = new Date();
    tempsCourant.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
refreshTime();
var compteurTemps = setInterval(refreshTime, 1000);
document.getElementById("stop").addEventListener("click", function () {
    clearInterval(compteurTemps);
    
    
})
document.getElementById("start").addEventListener("click", function () {
    refreshTime();
    var compteurTemps = setInterval(refreshTime, 1000);
})
// end le python temps
// le carousel 


// var slideIndex,slides,dots,captionText;
// function initGallery(){
//     slideIndex = 0;
//     slides=document.getElementsByClassName("imageHolder");
//     slides[slideIndex].style.opacity=1;

//     captionText=document.querySelector(".captionTextHolder .captionText");
//     captionText.innerText=slides[slideIndex].querySelector(".captionText").innerText;

//     //disable nextPrevBtn if slide count is one
//     if(slides.length<2){
//         var nextPrevBtns=document.querySelector(".leftArrow,.rightArrow");
//         nextPrevBtns.style.display="none";
//         for (i = 0; i < nextPrevBtn.length; i++) {
//             nextPrevBtn[i].style.display="none";
//         }
//     }

//     //add dots
//     dots=[];
//     var dotsContainer=document.getElementById("dotsContainer"),i;
//     for (i = 0; i < slides.length; i++) {
//         var dot=document.createElement("span");
//         dot.classList.add("dots");
//         dotsContainer.append(dot);
//         dot.setAttribute("onclick","moveSlide("+i+")");
//         dots.push(dot);
//     }
//     dots[slideIndex].classList.add("active");
// }
// initGallery();
// function plusSlides(n) {
//     moveSlide(slideIndex+n);
// }
// function moveSlide(n){
//     var i;
//     var current,next;
//     var moveSlideAnimClass={
//           forCurrent:"",
//           forNext:""
//     };
//     var slideTextAnimClass;
//     if(n>slideIndex) {
//         if(n >= slides.length){n=0;}
//         moveSlideAnimClass.forCurrent="moveLeftCurrentSlide";
//         moveSlideAnimClass.forNext="moveLeftNextSlide";
//         slideTextAnimClass="slideTextFromTop";
//     }else if(n<slideIndex){
//         if(n<0){n=slides.length-1;}
//         moveSlideAnimClass.forCurrent="moveRightCurrentSlide";
//         moveSlideAnimClass.forNext="moveRightPrevSlide";
//         slideTextAnimClass="slideTextFromBottom";
//     }

//     if(n!=slideIndex){
//         next = slides[n];
//         current=slides[slideIndex];
//         for (i = 0; i < slides.length; i++) {
//             slides[i].className = "imageHolder";
//             slides[i].style.opacity=0;
//             dots[i].classList.remove("active");
//         }
//         current.classList.add(moveSlideAnimClass.forCurrent);
//         next.classList.add(moveSlideAnimClass.forNext);
//         dots[n].classList.add("active");
//         slideIndex=n;
//         captionText.style.display="none";
//         captionText.className="captionText "+slideTextAnimClass;
//         captionText.innerText=slides[n].querySelector(".captionText").innerText;
//         captionText.style.display="block";
//     }

// }
// var timer=null;
// function setTimer(){
//     timer=setInterval(function () {
//         plusSlides(1) ;
//     },6000);
// }
// setTimer();
// function playPauseSlides() {
//     var playPauseBtn=document.getElementById("playPause");
//     if(timer==null){
//         setTimer();
//         playPauseBtn.style.backgroundPositionY="0px"
//     }else{
//         clearInterval(timer);
//         timer=null;
//         playPauseBtn.style.backgroundPositionY="-33px"
//     }
// }