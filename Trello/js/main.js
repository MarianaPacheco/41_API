var btnGuardar = document.createElement('button');
btnGuardar.innerHTML = 'Guardar';
btnGuardar.setAttribute('class', 'btn');

var divNombreLista = document.getElementById('divNombrarLista');

var inputAddLista = document.createElement('input');
	inputAddLista.setAttribute('placeholder', 'Añadir una lista...');
	inputAddLista.setAttribute('autofocus', '');
	inputAddLista.setAttribute('class', 'img-thumbnail');

function clickInputAddLista(){

	var divAddLista = document.createElement('div');
	divAddLista.setAttribute('class', 'divAddLista img-thumbnail noMove');

	var btnTache = document.createElement('button');
	var spanTache = document.createElement('span');
	spanTache.setAttribute('class', 'fa fa-close');
	btnTache.appendChild(spanTache);

	divNombreLista.appendChild(divAddLista);
	divAddLista.appendChild(inputAddLista);
	divAddLista.appendChild(btnGuardar);
	divAddLista.appendChild(btnTache);

	quitaBtnAdd = document.getElementById('inputAddLista');	
	/*Remplaza el input por el div contenedor*/
	quitaBtnAdd.style.display = 'none';
	//Usé CSS inline para que no se deba mostrar inputAddLista

	function clickEliminarDivAddLista(){
		divAddLista.parentNode.removeChild(divAddLista);
		//NombreDelDivQueVoyAEliminar.parentNode.removeChild(NombreDelDivQueVoyAEliminar);
		//Le digo al padre de divAddLista (con .parentNode porque no sé quién es su padre) que elimine a divAddLista
		document.getElementById('inputAddLista').style.display = 'block';
		//Consigue el id del elemento que quiero mostrar de nuevo, se relacionan las líneas 29 y 36
	}
	btnTache.onclick = clickEliminarDivAddLista;
}

var cuadroAddLista = document.getElementById('inputAddLista');	
// Creo una variable para mi caja de texto creada en el html, que llama el id que tiene en html
cuadroAddLista.onclick = clickInputAddLista;	
/*Evento para cuando se le de click al cuadro "Añadir lista..." haga la funcion clickInputAddLista*/

var btnEliminar = document.createElement('button');
var spanEliminar = document.createElement('span');
spanEliminar.setAttribute('class', 'fa fa-close');
btnEliminar.appendChild(spanEliminar);

var textTarjeta = document.createElement('textarea');
textTarjeta.setAttribute('class', 'img-thumbnail');
textTarjeta.setAttribute('autofocus', '');

function clickBtnGuardar(){

	if (inputAddLista.value === "" || inputAddLista.value === " " || inputAddLista.value === "null" || inputAddLista.value < 4){
		alert("Campo obligatorio. Mínimo 4 caracteres."); 
		return false; 	
		/*Si esto es falso ya no hagas la función*/
	} 

	var divAddTarjetas = document.createElement('div');
	divAddTarjetas.setAttribute('class', 'divAddTarjetas img-thumbnail');

	var tituloLista = document.createElement('h3');
	tituloLista.appendChild(document.createTextNode(inputAddLista.value));
	//tituloLista.innerHTML = inputAddLista.value;
	/*Otra forma de hacer el paso anterior*/

	var addTarjeta = document.createElement('a');
	addTarjeta.innerHTML = 'Añadir una tarjeta';

	divNombreLista.appendChild(divAddTarjetas);
	divAddTarjetas.appendChild(tituloLista); 
	divAddTarjetas.appendChild(addTarjeta);

	var divAddTarjetas2 = document.createElement('div');
	divAddTarjetas2.setAttribute('class', 'divAddTarjetas2 img-thumbnail');

	var btnAdd = document.createElement('button');
	btnAdd.innerHTML = 'Añadir';
	btnAdd.setAttribute('class', 'btn');

	function clickAddTarjeta(){

	divAddTarjetas.appendChild(divAddTarjetas2);
	divAddTarjetas2.appendChild(tituloLista);
	divAddTarjetas2.appendChild(textTarjeta);
	divAddTarjetas2.appendChild(addTarjeta);
	divAddTarjetas2.appendChild(btnAdd);
	divAddTarjetas2.appendChild(btnEliminar);

	//addTarjeta.parentNode.removeChild(addTarjeta);
	}
	addTarjeta.onclick = clickAddTarjeta;

	inputAddLista.value = "";

	function clickEliminarTextArea(){
		textTarjeta.parentNode.removeChild(textTarjeta);
		var addTarjetaClon = addTarjeta.cloneNode(true);
		//nueva variable clon = elemento que quiero clonar.cloneNode(booleano);
		divAddTarjetas2.insertBefore(addTarjeta, btnAdd);
		//dentro del divAddTarjetas2 incrustar addTarjeta antes de btnAdd
	}
	btnEliminar.onclick = clickEliminarTextArea;

	function clickBtnAdd(){
		if (textTarjeta.value === "" || textTarjeta.value === " " || textTarjeta.value === "null" || textTarjeta.value > 4){
			alert("Campo obligatorio. Mínimo 4 caracteres."); 
			return false; 	
		}

		var divTextTarjeta = document.createElement('div');
		divTextTarjeta.setAttribute('id', 'dtt');
		divTextTarjeta.setAttribute('class', 'divTextTarjeta img-thumbnail');
		divTextTarjeta.setAttribute('draggable', 'true');
		/*El atributo draggable es para indicar que ese elemento se puede mover de su lugar*/
		divTextTarjeta.id = "" + (new Date()).getTime();

		var liTextTarjeta = document.createElement('p');
		liTextTarjeta.appendChild(document.createTextNode(textTarjeta.value));

		divTextTarjeta.appendChild(liTextTarjeta);
		//divAddTarjetas2.appendChild(divTextTarjeta);
		divAddTarjetas2.insertBefore(divTextTarjeta, textTarjeta);
		//divAddTarjetas2.insertBefore(tituloLista, textTarjeta.childNodes[0]);

		/*function clickAddTarjeta2(){
			divAddTarjetas2.insertBefore(divTextTarjeta, textTarjeta);
		}
		addTarjetaClon.onclick = clickAddTarjeta2;*/

		divAddTarjetas2.ondragover = allowDrop;
		// Para el elemento en donde colocaré el elemento arrastrado
		divTextTarjeta.ondragstart = drag;
		// Para el elemento que voy a arrastrar
		divTextTarjeta.ondragend = dragend;
		// Para el elemento en donde colocaré el elemento arrastrado
		divAddTarjetas2.ondrop = drop;
		// Para cuando finaliza la función del elemento que arrastro

		textTarjeta.value = "";
	}
	btnAdd.onclick = clickBtnAdd;

	function allowDrop(ev) {
    	//this.style.border = '2px dashed black';
    	ev.preventDefault();
	}

	function drag(ev) {
		this.style.backgroundColor = 'rgba(119, 28, 191,.9)';
	    ev.dataTransfer.setData("text", ev.target.id);
	    // En este caso, el tipo de datos es "texto" y el valor es el id del elemento arrastrable ( "dtt").
	}
	//Hace la función de cambiar a morado el elemento que arrastro cuando lo agarro

	function drop(ev) {
		//this.style.border = '1px solid gray';
	    ev.preventDefault();
	    var data = ev.dataTransfer.getData("text");
	    ev.target.appendChild(document.getElementById(data));
	}

	function dragend(ev) {
		this.style.backgroundColor = 'white';
	}
	//Hace la función de cambiar a blanco el elemento que arrastro cuando lo suelta
}

btnGuardar.onclick = clickBtnGuardar;