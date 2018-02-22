function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
	while(respuesta="si")
	{
		contador++;
		numero=prompt("numero");
		if(isNaN(numero),numero==null)
			{
				break;
			}
		numero=parseInt(numero)//NaN
		acumulador=acumulador+numero;
		respuesta=prompt("desea continuar");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN