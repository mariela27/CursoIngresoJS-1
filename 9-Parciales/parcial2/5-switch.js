//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 5-Switch");

	var mesDelAño;
	mesDelAño=prompt("ingrese el mes");

	switch(mesDelAño)
	{
		case "enero":
		case "febrero":
			alert("Veranito!!!!");
			break;
		default:
			alert("extraño enero y febrero!!!");
			break;
	}

	

	
}

