//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 3-EntradaSalida");
	
	var largo;
	var ancho;
	var resultado;

	largo=document.getElementById("largo").value
	ancho=document.getElementById("ancho").value

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro = 2 * (ancho + largo);
	resultado = 6 * perimetro
	alert("se necesitan " +resultado+ " metros de alambre para rodear el perimetro");

}

