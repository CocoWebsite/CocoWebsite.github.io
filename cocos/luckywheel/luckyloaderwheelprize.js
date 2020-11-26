document.getElementById("lucky").innerHTML = '<img src="luckyprizestill.png" height="30%" width="30%" onClick="loadSpin();">';
loadSpin = function()
{
    document.getElementById("lucky").innerHTML = '<img src="freedecide.gif" height="30%" width="30%">';
    setTimeout(loadPrizePage, 3000);
}
loadPrizePage = function()
{
    window.location.replace("./prizeclaim/");
}