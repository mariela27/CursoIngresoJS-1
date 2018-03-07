//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()

{
	
	alert("Funciona 3-EntradaSalida");
	
	var largo;
	var ancho;
	var perimetro;

	largo=document.getElementById("largo").value
	ancho=document.getElementById("ancho").value

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=largo*2+ancho*2;
	perimetro=perimetro*3;
	alert("se nesecitan " +perimetro+ " hilos")

	





}	