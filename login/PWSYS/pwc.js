if (urlVariables["PWI"] != undefined)
{
if (hashCode(urlVariables["PWI"]) == PWH)
{
    document.getElementById("maincontent").innerHTML = '<iframe src="https://cocowebsite.github.io/home/?PWS=ENTER" height="100%" width="100%" style="background-color:white;"></iframe>';
} else {
    genlogin();
    console.log("Wrong password entered");
}
} else {
    genlogin();
}

checkPass = function(PWUI)
{
    if (hashCode(PWUI) == PWH)
    {
        document.getElementById("maincontent").innerHTML = '<iframe src="https://cocowebsite.github.io/home/?PWS=ENTER" height="100%" width="100%" style="background-color:white;"></iframe>';
    }
}