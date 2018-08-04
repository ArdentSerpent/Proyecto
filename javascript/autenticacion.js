jQuery(document).ready(function($){
	$('.Login').on(
		'submit',
		function(e){
			e.preventDefault();

			var email = $('.Login .email').val();
			var contraseña = $('.Login .password').val();

			if (!email) {
				alert("Debe ingresar un correo");
			} else if (!contraseña) {
				alert("Debe ingrsar una contraseña");
			} else {
				firebase
				.auth()
				.signInWithEmailAndPassword(email, contraseña)
				.then(function() {
					location.href ="Clases.html";
				})
				.catch(function(error) {
					alert("Algo salio mal...");
				});
			}
		}
		);

	//Resitrarse

	$('.Registro').on(
		'submit',
		function(e){
			e.preventDefault();

			var email_registro = $('.Registro .email').val();
			var contraseña_registro = $('.Registro .password').val();

			if (!email_registro) {
				alert("Debe ingresar un correo");
			} else if (!contraseña_registro) {
				alert("Debe ingresar una contraseña")
			} else {
				firebase
				.auth()
				.createUserWithEmailAndPassword(email_registro, contraseña_registro)
				.then(function(){
					location.href ="Clases.html";
					alert("Cuenta creada correctamente");
				})
				.catch(function(error) {
					alert("Algo salio mal...");
				});
			}
		}
		);
});