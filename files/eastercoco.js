//a script to show messages on certain dates. i named the variable ZAK because this is an easter EGG

function cursecoco() {
alert ("coco has got the curse");
}

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
} else if (urlVariables["amazon"] == "") { 
window.location.replace("./../cocos/amazoncoco/")
} else if (urlVariables["utdi"] == "") { 
window.location.replace("./../cocos/secretcocos/UTDI/")
}