function Mostrar()
{

	var contador=0;
	var numero;
	var contadornegativo=0;
	var contadorpositivo=0;
	var acumuladorpositivo;
	var acumuladornegativo;


	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
	
		if (numero<0)
		{
			acumuladornegativo=negativo+numero;
			contadornegativo++;
		}
		else
		{
			if(numero>0)
			{
				acumuladorpositivo=acumuladorpositivo+numero;
				contadorpositivo++;
			}

		}
		if (numero%2==0&&numero!=0)

		{
			contadorpares++;
		}

		
	}
		

}//FIN DE LA FUNCIÓN