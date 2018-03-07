function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("ingrese el numero");
	numeroDos=prompt("ingrese el numero");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
	}
	if(numeroUno>numeroDos)
	{
		resultado=numeroUno-numeroDos;
	}
	else 
		if(numeroUno<numeroDos)
		{
			resultado=numeroUno+numeroDos;
		}

	


	document.write("el resultado es "+resultado);

}
