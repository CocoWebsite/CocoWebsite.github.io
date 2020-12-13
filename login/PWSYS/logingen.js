var genlogin = function()
{
document.getElementById("maincontent").innerHTML = '<div id="centercontent"><form method="post" onsubmit="checkPass(document.getElementById(\'PWI\').value);"><label for="PWI" style="color:white;">Password:</label><br><input type="password" id="PWI" name="PWI"><br></form></div>';
}