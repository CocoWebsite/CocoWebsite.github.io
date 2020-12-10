if (cocodead == false)
{
luckyrandom = Math.floor(Math.random() * 11)
if (luckyrandom == 5)
{
    document.getElementById("allContent").innerHTML = '<div id="outPopUp"><H1>Congradulations!</H1><H3>You win luckyspin on wheel!</H3><img src="./cocos/luckywheel/prizeclaim/continuenoscam.png" height="140" width="250" onClick="window.location.replace(\'./cocos/luckywheel/\');"></div>';
} else {
    window.location.replace("./home/");
}
} else {
document.getElementById("allContent").innerHTML = "";
window.location.replace("./rip/")
}