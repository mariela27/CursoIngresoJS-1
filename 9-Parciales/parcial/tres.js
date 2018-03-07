
	function Mostrar()
{

	var largo;
	var ancho;
	var perimetro;
	
	largo=document.getElementById("alrgo").value
	ancho=document.getElementById("ancho").value

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro=largo*2+ancho*2; //sus dos lados//
	perimetro=perimetro*3;
	alert("se necesitan " +perimetro+" metros de hilos para rodear su perimetro");







}
