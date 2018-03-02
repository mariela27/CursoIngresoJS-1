//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 2-EntradaSalida");

	

	var importe;
	var precioFinal;
	
	importe=prompt("ingrese importe");
	precioFinal=importe*1.21;
	document.getElementById("importe").value=precioFinal;
	
}

