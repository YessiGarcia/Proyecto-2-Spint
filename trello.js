function crearElemento1 (){
	var nuevoElemento = document.getElementById("nuevoElemento1").value;
	if(nuevoElemento.length>0){
		var elemento = document.createElement("li");
		elemento.id = nuevoElemento;
		elemento.innerHTML = nuevoElemento;
		document.getElementById("lista1").appendChild(elemento);
	}
	return false;
}

function crearElemento2 (){
	var nuevoElemento = document.getElementById("nuevoElemento2").value;
	if(nuevoElemento.length>0){
		var elemento = document.createElement("li");
		elemento.id = nuevoElemento;
		elemento.innerHTML = nuevoElemento;
		document.getElementById("lista2").appendChild(elemento);
	}
	return false;
}

function crearLista () {
	var lista = document.getElementById("nuevaLista").value;
	document.getElementById("listaNueva").innerHTML = lista;
	if(listaNueva.length>0){
		
	}
}
