//le python temps
//declaration variable
const d = new Date()



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