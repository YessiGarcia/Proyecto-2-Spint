function crearElemento (){
		var nuevoElemento = document.getElementById("nuevoElemento").value;
		if(nuevoElemento.length>0){
			var elemento=document.createElement("li");
			elemento.id=nuevoElemento;
			elemento.innerHTML=nuevoElemento;
			document.getElementById("lista1").appendChild(elemento);
		}
	return false;
}
