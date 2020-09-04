//a script to show messages on certain dates. i named the variable ZAK because this is an easter EGG
var timestuffs = new Date();
var SECOND = timestuffs.getSeconds()
var MINUTE = timestuffs.getMinutes()
var HOUR = timestuffs.getHours()
var DAY = timestuffs.getDay()
var DATE = timestuffs.getDate()
var MONTH = timestuffs.getMonth() + 1 //add 1 because the getMonth() function starts from 0 (January is 0 normaly)
var YEAR = timestuffs.getFullYear()

function cursecoco() {
alert ("coco has got the curse");
}

//Check if it is easter function
function EASTERCHECK(Y) {
    var C = Math.floor(Y/100);
    var N = Y - 19*Math.floor(Y/19);
    var K = Math.floor((C - 17)/25);
    var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
    I = I - 30*Math.floor((I/30));
    I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
    var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
    J = J - 7*Math.floor(J/7);
    var L = I - J;
    var M = 3 + Math.floor((L + 40)/44);
    var D = L + 28 - 31*Math.floor(M/4);

    return padout(M) + '.' + padout(D);
}

function padout(number) { return (number < 10) ? '0' + number : number; }

//document.getElementById("ZAK").innerHTML = HOUR + " " + DATE + " " + DAY + " " + MONTH + " " + YEAR + " ISEASTER = " + ISEASTER + " e1 = " + e1 + " EASTERMONTH = " + EASTERMONTH + " " + EASTERCHECK(YEAR); //only for testing perposes

//new years eve has to count down so it needs a while loop to count down so it is over here


//time to do some if statements to check for certain dates and send a message back to the html if it is the corect date
if (EASTERCHECK(YEAR) == "0" + MONTH + "." + DATE) {
document.getElementById("ZAK").innerHTML = "<P>Coco is the easter bunny, and has laid an egg:</P><img src='./../files/cocoeaster.jpg'>";
} else if (MONTH == 12 && DATE == 25) {
document.getElementById("ZAK").innerHTML = "<P>Its coco christmas!</P><img onclick='cursecoco()' src='./../files/cococristmas.jpg' height='500' width='452.380952381'>";
} else if (MONTH == 12 && DATE < 24) {
document.getElementById("ZAK").innerHTML = "<P>Its " + (25 - DATE) + " days until coco christmas!</P>";
} else if (MONTH == 12 && DATE == 24) {
document.getElementById("ZAK").innerHTML = "<P>Its coco christmas eve, 1 day until coco christmas!</P>";
} else if (MONTH == 12 && DATE == 26) {
document.getElementById("ZAK").innerHTML = "<P>Its coco boxing day.</P>";
} else if (MONTH == 12 && DATE == 31) {
document.getElementById("ZAK").innerHTML = "<P>Its new years eve! coco counter:</P><iframe src='./../files/cococounter1.html' title='Countdown' frameborder=0></iframe>";
refreshAt(12,0,0)
} else if (MONTH == 1 && DATE == 1) {
document.getElementById("ZAK").innerHTML = "<P>Happy new year!</P><H1>" + YEAR + "</H1>";
} else if (MONTH == 10 && DATE == 31) {
document.getElementById("ZAK").innerHTML = "<P>Its Halloween. Coco is scared that the curse is here.</P><img src='./../files/halloweencoco.jpg'>";
}

//check for url bar secrets
if (urlVariables["coco"] == "poor") {
document.getElementById("ZAK").innerHTML = "<P>coco is poor. coco is sad. have a coco coin</P><img src='./../files/cococoin.png'>";
} else if (urlVariables["amazon"] == "" or urlVariables["coco"] == "amazon") { 
window.location.replace("./../cocos/secretcocos/amazoncoco/")
}