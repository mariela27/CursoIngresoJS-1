//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 5-Switch");

	var mesDelAño;
	mesDelAño=prompt("ingresar mes");


	switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
			alert("Veranito!!!!")
			break;
		default:
			alert("extraño enero y febrero!!!")
			break;


	}

	
}

