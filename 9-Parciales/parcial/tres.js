function Mostrar()
{
	  var largo = parseInt(document.getElementById("alrgo").value);
    var ancho = parseInt(document.getElementById("ancho").value);
    alert("Para rodear 3 veces el terreno se necesitan " + (((largo + ancho)*2)*3) + " metros de alambre");

}
