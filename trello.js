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
	document.getElementById("tituloNuevo").innerHTML = lista;	
}

var elemen1 = document.getElementById("nuevoElemento3");
var elemen2 = 

function Lista (elmen1, elemen2, elemen3, elemen4,elemen5){
	this.elmen1 = elmen1;
	this.elmen2 = elmen2;
	this.elmen3 = elmen3; 
	this.elmen4 = elmen4;
	this.elmen5 = elmen4;
}

var otraLista = new Lista (elemen1, elemen2, elemen3, elemen4, elemen5);
