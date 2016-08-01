window.addEventListener("load", function(){

	var button = document.getElementById("button");

	button.addEventListener("click", function(){
	var colors = ["yellow", "red", "blue", "black", "green", "orange", "purple", "white", "pink", "brown"];
	var random = Math.floor(Math.random() * (9 - 0)) + 0;
	var background = document.getElementById("background");

	background.style.background = colors[random];	
	});

});