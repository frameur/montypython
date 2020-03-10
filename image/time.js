//le python temps

var d = naw Date("2015-05-14T14:15:00Z")

var tempsCourant = document.getElementById('temps-actuel'); {
    var d = new Date();
    tempsCourant.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
refreshTime();
setInterval(refreshTime, 1000);

var compteurTemps = document.getElementById("stop").addEventListener("click", function(){
    clearInterval(compteurTemps);
})
var compteurTemps = document.getElementById("start").addEventListener("click", function(){
    refreshTime();
setInterval(refreshTime, 1000);
})