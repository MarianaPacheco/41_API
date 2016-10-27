var btnClickInput = document.getElementById('crearLista');
	btnClickInput.onclick =  crearLista;

var crearTarjeta = document.getElementById('crearTarjeta');

var createInput = document.createElement('input');
	createInput.setAttribute('id','cajaTexto');

var createSpan = document.createElement('span');
 	createSpan.setAttribute('class', 'fa fa-close');
function crearLista(){

	var createForm = document.createElement('div');
		createForm.setAttribute('class','fondo');
		
	var createButton = document.createElement('button');
		createButton.innerHTML="Guardar";
 	   	createButton.setAttribute('class','btn btn-default'); 
 	
 	// var createSpan = document.createElement('span');
 	// 	createSpan.setAttribute('class', 'fa fa-close');

 	crearTarjeta.appendChild(createForm);
 	createForm.appendChild(createInput);
 	createForm.appendChild(createButton);
 	createForm.appendChild(createSpan);

	createButton.onclick = guardar;
	createSpan.onclick = presionarTache;	
}

function presionarTache(){
   	crearTarjeta.parentNode.removeChild(crearTarjeta);
}


function guardar() {
	if (createInput.value === "") {
		createInput.setAttribute('placeholder', 'Ingresa texto válido');
		return false;
	} 

	//Crear y asignar atributos
	var divTarjetaTexto =document.createElement('div');
		divTarjetaTexto.setAttribute('class', 'fondo');

	var h4 = document.createElement('h4');


	var enlaceDentroDiv = document.createElement('a');
		enlaceDentroDiv.innerHTML="Añade una tarjeta";
		enlaceDentroDiv.setAttribute('class', 'enlaceDentroDivTarjeta');


	
	//Guardar o Concatenar todo
	crearTarjeta.appendChild(divTarjetaTexto);
	h4.innerHTML = createInput.value;
	divTarjetaTexto.appendChild(h4);
	divTarjetaTexto.appendChild(enlaceDentroDiv);



	function changeTarjetVStextarea() {
		var divTextAreaButtonSpan = document.createElement('div');

		var areaTextoCambio = document.createElement('textarea');
			areaTextoCambio.setAttribute('class', 'areaTextChange');

		var buttonDentroDivAnadir = document.createElement('button');
			buttonDentroDivAnadir.innerHTML="Añadir";
			buttonDentroDivAnadir.setAttribute('class', 'btn btn-default');


		divTextAreaButtonSpan.appendChild(areaTextoCambio);
		divTextAreaButtonSpan.appendChild(buttonDentroDivAnadir);
		divTextAreaButtonSpan.appendChild(createSpan);


		enlaceDentroDiv.appendChild(divTextAreaButtonSpan);
		enlaceDentroDiv.parentElement.replaceChild(divTextAreaButtonSpan, enlaceDentroDiv);

		function validarTextAnadirText() {
			if ( areaTextoCambio.value == "") {
				areaTextoCambio.setAttribute('placeholder', 'Ingresa texto tarjeta');
				return false;
				//si lo valida
			}	

		var tarjetaTextoDiv = document.createElement('div');
			tarjetaTextoDiv.setAttribute('class', 'tarjetaTextoh3Style');

		var textoh3IncluirTarjeta = document.createElement('h3');
			textoh3IncluirTarjeta.innerHTML=areaTextoCambio.value;


		divTarjetaTexto.appendChild(tarjetaTextoDiv);
		tarjetaTextoDiv.appendChild(textoh3IncluirTarjeta);


		areaTextoCambio.value = "";
		} buttonDentroDivAnadir.onclick=validarTextAnadirText;



	} enlaceDentroDiv.onclick = changeTarjetVStextarea;

	




	//Comenzar en 0 el input de Inicio
	createInput.value = "";
}