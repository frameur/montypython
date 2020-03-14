//le python temps


//fonction pour eviter temps de latence  d'affichage 
function refreshTime() {
    const tempsCourant = document.getElementById("timeactu");
    const d = new Date();

//condition ajout du zero
function addZero(i){
    if(i< 10){
        i = "0" + i;
    }
    return i;
}
//affichage heure 
    tempsCourant.innerHTML = addZero (d.getHours()) + ":" + addZero (d.getMinutes()) + ":" + addZero (d.getSeconds());


}


refreshTime();
let compteurTemps = setInterval(refreshTime, 1000);

//commande arret heure
document.getElementById("stop").addEventListener("click", function () {
    clearInterval(compteurTemps);


});
//commande relance heure

document.getElementById("start").addEventListener("click", function () {
    refreshTime();
    compteurTemps = setInterval(refreshTime, 1000);


});

