//le python temps


//fonction pour eviter temps de latence  d'affichage 
function refreshTime() {
    const tempsCourant = document.getElementById("timeactu");
    const d = new Date();

//affichage heure 
function addZero(i){
    if(i< 10){
        i = "0" + i;
    }
    return i;
}
    tempsCourant.innerHTML = addZero (d.getHours()) + ":" + addZero (d.getMinutes()) + ":" + addZero (d.getSeconds());


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

