//le python temps


//fonction de refresh
function refreshTime() {
    const tempsCourant = document.getElementById("timeactu");
    const d = new Date();
    //affichage heure 
    tempsCourant.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();


}


refreshTime();
let compteurTemps = setInterval(refreshTime, 1000);
//commande arret heure
document.getElementById("stop").addEventListener("click", function () {
    clearInterval(compteurTemps);


});
//commande depart heure

document.getElementById("start").addEventListener("click", function () {
    refreshTime();
    compteurTemps = setInterval(refreshTime, 1000);


});


