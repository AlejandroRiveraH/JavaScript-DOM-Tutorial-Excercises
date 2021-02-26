//agarrar boton
let button = document.querySelector("#superDuperButton");

//agregar comportamiento
button.addEventListener("click", function() {
	//your code here
	let elemento = document.createElement("li");
	elemento.innerHTML("Forth element");

	let lista = document.getElementById("myList");

	lista.appendChild(elemento);
});
