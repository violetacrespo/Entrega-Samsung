const form = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function(event) {
	event.preventDefault();

	if (nameInput.value.trim() === "") {
		errorMessage.textContent = "Por favor ingrese su nombre.";
		return;
	}

	if (emailInput.value.trim() === "") {
		errorMessage.textContent = "Por favor ingrese su correo electrónico.";
		return;
	}

	if (passwordInput.value.trim() === "") {
		errorMessage.textContent = "Por favor ingrese una contraseña.";
		return;
	}

	if (passwordInput.value !== confirmPasswordInput.value) {
		errorMessage.textContent = "Las contraseñas no coinciden.";
		return;
	}

	if (passwordInput.value.length > 8) {
		errorMessage.textContent = "La contraseña debe tener máximo 8 caracteres.";
		return;
	}

	alert("Archivo creado con éxito.");
	form.submit();
});
