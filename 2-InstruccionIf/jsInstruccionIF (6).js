function Mostrar()
{
//tomo la edad  

	var edad;
	edad=document.getElementById("edad").value
	if(edad>=18)
	{
		alert("mayor de edad")
	}
	else if(edad>=13&&edad<=17)
	{
		alert("eres adolescente")

	}
	else if(edad<13)
	{
		alert("eres niño")
	}
}//FIN DE LA FUNCIÓN