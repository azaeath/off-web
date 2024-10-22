var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
		} else {
		panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}
function showSection(event, section) {
	var i,
		x = document.getElementsByClassName('section'),
		y = document.getElementsByClassName('secLinks');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < y.length; i++) {
		y[i].className = y[i].className.replace(' active', '');
	}
	document.getElementById(section).style.display = "block";
	event.currentTarget.className += ' active';
}
document.getElementById('defSec').click();
function showTable(event, quarter) {
	var i, x, y;
	var x = document.getElementsByClassName('tabCon');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	var y = document.getElementsByClassName('tablinks');
	for (i = 0; i < y.length; i++) {
		y[i].className = y[i].className.replace(' active', '');
	}
	document.getElementById(quarter).style.display = "block";
	event.currentTarget.className += ' active';
}
document.getElementById('defQt').click();