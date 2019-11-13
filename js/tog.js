// Toggle buttons and their functions. Hopefully, this goes well as my first attempt at JS.// Toggle buttons and their functions. Hopefully, this goes well as my first attempt at JS.
function mobiMenu() {
	var x = document.getElementById("mobiNav");
	if (x.style.left === "-100%") {
		x.style.left = "0";
	} else {
		x.style.left = "-100%";
	}
}