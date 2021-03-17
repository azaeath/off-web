// Toggles the mobile menu on or off screen.
function mobiMenu() {
	var x = document.getElementById("mobiNav");
	if (x.style.left === "-100%") {
		x.style.left = "0";
	} else {
		x.style.left = "-100%";
	}
}

function openTab(coInfo, coType) {
  // Declare all variables
  var i, tabCont, tabLink;
  // Get all elements with class="tabCont" and hide them
  tabCont = document.getElementsByClassName("tabCont");
  for (i = 0; i < tabCont.length; i++) {
    tabCont[i].style.display = "none";
  }
  // Get all elements with class="tabLink" and remove the class "active"
  tabLink = document.getElementsByClassName("tabLink");
  for (i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(" active", "");
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(coType).style.display = "block";
  coInfo.currentTarget.className += " active";
}