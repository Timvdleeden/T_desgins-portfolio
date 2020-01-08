
	var tijd = new Date().getHours();
	if (tijd > 18 || tijd < 6) {
	  // If time is after 6PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";
    }
    else {
	  // Else use ‘day’ theme
	  document.body.className = "day";
}

 document.getElementById("sport").onclick = function() {
     document.getElementById("sport").innerHTML = "Ik tafeltennis al bijna 10 jaar op hoog niveau!";
 }
 document.getElementById("AHkleur").onclick = function() {
     document.getElementById("AHkleur").innerHTML = "Ik werk al bijna 2 jaar bij Albert Heijn en ik word binnekort misschien teamleider!";
 }
 document.getElementById("cmd").onclick = function() {
     document.getElementById("cmd").innerHTML = "Tot nu toe heb ik alle punten gehaald op CMD, ik heb dus mijn propedeuse!";
 }
 document.getElementById("daan").onclick = function() {
     document.getElementById("daan").innerHTML = "Sinds bijna 5 maanden heb ik een hele lieve vriendin genaamd Danielle. ";
 }