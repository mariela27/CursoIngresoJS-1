function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	while(respuesta="si")
	{
		numero=prompt("numero");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("numero");
			numero=parseInt(numero);
		}
		if(numero>0)
		{
			positivo=positivo+numero;

		}
		else if (numero 1<0)
		{
			negativo=negativo-numero;
			
		}
		respuesta=prompt

		
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN