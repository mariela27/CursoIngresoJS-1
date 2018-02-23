function Mostrar()
{

	var contador=0;
	var numero;
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta='si';

	while (respuesta  != ' no ' )
	{
		numero=parseInt(numero);
		numero=prompt("ingrese numero");
	
	}
	if (contador==0)
	{
		maximo=numero;
		minimo=maximo;
	}
	else 
	{
		if (numero>maximo)
		{
			numero=maximo;
		}
		if (numero<minimo)
		{
			numero=minimo;
		}

	}		
	contador++;
	respuesta=prompt("para salir ingrese no");

	
	




}//FIN DE LA FUNCIÓN