//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	alert("Funciona 5-Switch");
	var mesDelAño;
	mesDelAño=document.getElementById("mes").value

	switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
			alert("Veranito!!!!");
			break;
		

	}
	
}

