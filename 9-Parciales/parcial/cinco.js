function Mostrar()
{
	var diaDeLaSemana;
	diaDeLaSemana=prompt("ingrese el dia");

	switch(diaDeLaSemana)
	{
		case "sabado":
		case "domingo":
			alert("es fin de semana!!");
			break;
		default:
			alert("a trabajar!!");
			break;
	}
	
}
