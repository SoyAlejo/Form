function validar() {
	var nombre, apellidos, telefono, correo, pass, pass2;

	Nombre = document.getElementById("Nombre").value;
	Apellido = document.getElementById("Apellidos").value;
	Telefono = document.getElementById("Telefono").value;
	correo = document.getElementById("correo").value;
	pass = document.getElementById("pass").value;
	pass2 = document.getElementById("pass2").value;

	if (Telefono.length > 30) {
		alert("El Telefono es muy largo");
		return false;
	} else if (isNaN(Telefono)) {
		alert("El telefono ingresado no es un numero");
		return false;
	}
	if (pass != pass2) {
		alert("Las passwords deben de coincidir");
		return false;
	} else {
		return true;
	}
}
