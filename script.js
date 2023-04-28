function swapTheme(){
	const main = document.getElementById("app");
	const button = document.getElementById("swap");

	main.classList.toggle("night");
	button.classList.toggle("button_night");
}

