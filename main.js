console.log("hello")

var topInput = document.querySelector("#top-input");
var topButton = document.querySelector(".welcome-button");
var someDogs = document.querySelector("#some-dogs");


topButton.addEventListener('click', changeName);

function changeName(event){
	console.log("hello")
 event.preventDefault();
 someDogs.innerHTML = topInput.value;
}
