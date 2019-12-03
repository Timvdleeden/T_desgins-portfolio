
	var tijd = new Date().getHours();
	if (tijd > 18 || tijd < 6) {
	  // If time is after 6PM or before 6AM, apply night theme to ‘body’
	  document.body.className = "night";
    }
    else {
	  // Else use ‘day’ theme
	  document.body.className = "day";
}
