//le python temps
//declaration variable
const d = new Date("Mars 10, 2020 01:15:00Z");



//fonction de refresh
function refreshTime(){
let tempsCourant = document.getElementById("timeactu"); 
    let d = new Date();
    tempsCourant.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    
}
refreshTime();
let compteurTemps = setInterval(refreshTime, 1000);
//commande arret heure
document.getElementById("stop").addEventListener("click", function () {
    clearInterval(compteurTemps);
    
    
})
//commande depart heure

document.getElementById("start").addEventListener("click", function () {
    refreshTime();
    let compteurTemps = setInterval(refreshTime, 1000);
    
    
})

  
// end le python temps

//le compte a rebours

// const timerElt = document.getElementById('rebours');
// const counter = 100;

// const timerElt = setInterval(function (){

//     timerElt.innerText = counter;
//     counter--;
//     if (counter === 0){
//         setTimeout(function(){
//             clearInterval(rebours)
//         }, 1000);
//     }


// })



