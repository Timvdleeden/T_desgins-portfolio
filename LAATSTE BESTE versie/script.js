var tijd = new Date().getHours();
if (tijd > 18 || tijd < 6) {
    // wanneer het later dan 6 uur of voor 6 uur (ochtend) is, doe nachtthema.
    document.body.className = "night";
} else {
    // Anders dagthema
    document.body.className = "day";
}

document.getElementById("sport").onclick = function () {
    document.getElementById("sport").innerHTML = "Ik tafeltennis al bijna 10 jaar op hoog niveau!";
}
document.getElementById("AHkleur").onclick = function () {
    document.getElementById("AHkleur").innerHTML = "Ik werk al bijna 2 jaar bij Albert Heijn en ik word binnekort misschien teamleider!";
}
document.getElementById("cmd").onclick = function () {
    document.getElementById("cmd").innerHTML = "Tot nu toe heb ik alle punten gehaald op CMD, ik heb dus mijn propedeuse!";
}
document.getElementById("daan").onclick = function () {
    document.getElementById("daan").innerHTML = "Sinds bijna 5 maanden heb ik een hele lieve vriendin genaamd Danielle. ";
}
