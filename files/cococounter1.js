//new years eve counter
var timestuffs = new Date();
var DATE = timestuffs.getDate()
var MONTH = timestuffs.getMonth() + 1

if (DATE == 31 && MONTH == 12) {
document.getElementById("counterspace").innerHTML = "<P>hours:" + (23-timestuffs.getHours()) + " minutes:" + (59-timestuffs.getMinutes()) + " seconds:" + (59-timestuffs.getSeconds()) + "</P>";
setTimeout(function(){
   window.location.reload(1);
}, 1000);
} else {
setTimeout(function(){
   window.location.reload(1);
}, 0001);
}