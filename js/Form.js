(function () {
	var formulario = document.form;
	elementos = form;

	// functions
	var enviar = function (e) {
		if (!validarImputs()) {
			console.log("falto validar los input");
			e.preventDefault();
		} else if (!validarRadios()) {
			console.log("falto validar los Radio");
			e.preventDefault();
		} else if (!validarCheckbox()) {
			console.log("Falto Validar Los Checkbox");
			e.preventDefault();
		} else {
			console.log("envia correctamente");
			// e.preventDefault;
		}
	};

	//Funtion blur y focus
	var focusInput = function () {
		this.parentElement.children[0].className = "label active";
		this.parentElement.children[1].className = this.parentElement.children[0].className.replace(
			" error",
			""
		);
	};

	var blurInput = function () {
		if (this.value <= 0) {
			this.parentElement.children[0].className = "label";
			this.parentElement.children[1].className =
				this.parentElement.children[1].className + " error";
		}
	};

	// eventos
	formulario.addEventtListener("submit", enviar);
	for (var i = 0; i < elementos.length; i++) {
		if (
			elementos[i].type == "text" ||
			elementos[i].type == "password" ||
			elementos[i].type == "email" ||
			elementos[i].type == "tel"
		) {
			elementos[i].addEventtListener("focus", focusInput);
			elementos[i].addEventtListener("Blur", BlurInput);
		}
    }
     if (elementos.contraseña.value !== elementos.contraseña2.value) {
      elementos.contraseña.value = "";
      elementos.contraseña2.value = "";
      elementos.contraseña.className = elementos.contraseña.className + " error";
      elementos.contraseña2.className = elementos.contraseña2.className + " error";
    } else {
      elementos.contraseña.className = elementos.contraseña.className.replace(" error", "");
      elementos.contraseña.className = elementos.contraseña2.className.replace(" error", "");
    }

    return true;
  };

});
