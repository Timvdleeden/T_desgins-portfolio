var tijd = new Date().getHours();
if (tijd > 18 || tijd < 6) {
    // wanneer het later dan 6 uur of voor 6 uur (ochtend) is, doe nachtthema.
    document.body.className = "night";
} else {
    // Anders dagthema
    document.body.className = "day";
}




document.querySelector("button").addEventListener("click", function () {
    document.querySelector("button").innerHTML = "Ik tafeltennis al bijna 10 jaar op hoog niveau!";
})

document.querySelector("button:nth-child(2)").addEventListener("click", function () {
    document.querySelector("button:nth-child(2)").innerHTML = "Ik werk al bijna 2 jaar bij Albert Heijn en ik word binnekort misschien teamleider!";
})

document.querySelector("button:nth-child(3)").addEventListener("click", function () {
    document.querySelector("button:nth-child(3)").innerHTML = "Tot nu toe heb ik alle punten gehaald op CMD, ik heb dus mijn propedeuse!";
})

document.querySelector("button:nth-child(4)").addEventListener("click", function () {
    document.querySelector("button:nth-child(4)").innerHTML = "Sinds bijna 5 maanden heb ik een hele lieve vriendin genaamd Danielle. ";
})






//Classes gebruikt omdat het niet lukte

/*
document.querySelector(".box1").addEventListener("click", function(){
    document.getElementById("sport").innerHTML = "Ik tafeltennis al bijna 10 jaar op hoog niveau!";
})

document.querySelector(".box2").addEventListener("click", function(){
    document.getElementById("AHkleur").innerHTML = "Ik werk al bijna 2 jaar bij Albert Heijn en ik word binnekort misschien teamleider!";
})

document.querySelector(".box3").addEventListener("click", function(){
    document.getElementById("cmd").innerHTML = "Tot nu toe heb ik alle punten gehaald op CMD, ik heb dus mijn propedeuse!";
} )

document.querySelector(".box4").addEventListener("click", function(){
    document.getElementById("daan").innerHTML = "Sinds bijna 5 maanden heb ik een hele lieve vriendin genaamd Danielle. ";
})
*/






//Probeersels 

//document.querySelector("button.box").addEventListener("click", function(){
//document.getElementById("sport").innerHTML = "Ik tafeltennis al bijna 10 jaar op hoog niveau!";

//document.querySelector('section button:nth-child(1)').addEventListener("click", function(){
//document.getElementById("sport").innerHTML = "Ik tafeltennis al bijna 10 jaar op hoog niveau!";


//document.querySelectorAll('section button:nth-of-type(2)').addEventListener("click", function(){
//document.getElementById("sport").innerHTML = "Ik tafeltennis al bijna 10 jaar op hoog niveau!";





//Code met addevent, maar geen queryselector.

/*document.getElementById("sport").addEventListener("click", function(){
    document.getElementById("sport").innerHTML = "Ik tafeltennis al bijna 10 jaar op hoog niveau!";
})
document.getElementById("AHkleur").addEventListener("click", function () {
    document.getElementById("AHkleur").innerHTML = "Ik werk al bijna 2 jaar bij Albert Heijn en ik word binnekort misschien teamleider!";
})
document.getElementById("cmd").addEventListener("click", function () {
    document.getElementById("cmd").innerHTML = "Tot nu toe heb ik alle punten gehaald op CMD, ik heb dus mijn propedeuse!";
} )
document.getElementById("daan").addEventListener("click", function () {
    document.getElementById("daan").innerHTML = "Sinds bijna 5 maanden heb ik een hele lieve vriendin genaamd Danielle. ";
})
*/


//Eerste code met onclick

/* document.getElementById("daan").onclick = function () {
    document.getElementById("daan").innerHTML = "Sinds bijna 5 maanden heb ik een hele lieve vriendin genaamd Danielle. "; }
*/
