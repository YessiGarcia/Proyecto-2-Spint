function crearElemento1 (){
	var nuevoElemento = document.getElementById("nuevoElemento1").value;
	var elemento = document.createElement("li");
	elemento.innerHTML = nuevoElemento;
	document.getElementById("lista1").appendChild(elemento);
}

function crearLista () {
	var lista = document.getElementById("titulo").value;
	document.getElementById("tituloNuevo").innerHTML = lista;
	var elemento = document.createElement("input");
	var boton = document.createElement("input");
	document.getElementById("nuevaLista").appendChild(elemento);
	document.getElementById("nuevaLista").appendChild(boton);

	elemento.type ="text";
	elemento.id = "elemento";
	boton.type ="button";
	boton.value = "Crear pendiente";
	boton.onclick = function (){
						var nuevoElemento = document.getElementById("elemento").value;
						var elemento = document.createElement("li");
						elemento.innerHTML = nuevoElemento;
						document.getElementById("lista1").appendChild(elemento);
					};
}