// Toggles the mobile menu on or off screen.
function mobiMenu() {
	var x = document.getElementById("mobiNav");
	if (x.style.left === "-100%") {
		x.style.left = "0";
	} else {
		x.style.left = "-100%";
	}
}