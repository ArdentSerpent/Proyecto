jQuery(document).ready(function($){
	$('#boton').click(
		function(e){
			e.preventDefault();

			var correctas = 0;
			var incorrectas = 0;

			//Pregunta 1
			if ($("#respuesta_uno")[0].checked==true){
				incorrectas += 1;
			}else if ($("#respuesta_dos")[0].checked==true){
				correctas += 1;
			}else if ($("#respuesta_tres")[0].checked==true){
				incorrectas += 1;
			} else 
			alert("Debes seleccionar una respuesta");

			//Pregunta 2
			if ($("#respuesta_4")[0].checked==true) {
				incorrectas += 1;
			} else if ($("#respuesta_5")[0].checked==true) {
				incorrectas += 1;
			} else if ($("#respuesta_6")[0].checked==true) {
				correctas += 1;
			} else
			alert("Debes seleccionar una respuesta");

			//Pregunta 3
			if ($("#respuesta_7")[0].checked==true) {
				correctas += 1;
			} else if ($("#respuesta_8")[0].checked==true) {
				incorrectas += 1;
			} else if ($("#respuesta_9")[0].checked==true) {
				incorrectas += 1;
			} else
			alert("Debes seleccionar una respuesta");

			//Pregunta 4
			if ($("#respuesta_10")[0].checked==true) {
				correctas += 1;
			} else if ($("#respuesta_11")[0].checked==true) {
				incorrectas += 1;
			} else if ($("#respuesta_12")[0].checked==true) {
				incorrectas += 1;
			} else
			alert("Debes seleccionar una respuesta");

			//Pregunta 5
			if ($("#respuesta_13")[0].checked==true) {
				incorrectas += 1;
			} else if ($("#respuesta_14")[0].checked==true) {
				incorrectas += 1;
			} else if ($("#respuesta_15")[0].checked==true) {
				correctas += 1;
			} else
			alert("Debes seleccionar una respuesta");

			//Pregunta 6
			if ($("#respuesta_16")[0].checked==true) {
				incorrectas += 1;
			} else if ($("#respuesta_17")[0].checked==true) {
				incorrectas += 1;
			} else if ($("#respuesta_18")[0].checked==true) {
				correctas += 1;
			} else
			alert("Debes seleccionar una respuesta");

			//Pregunta 7
			if ($("#respuesta_19")[0].checked==true) {
				incorrectas += 1;
			} else if ($("#respuesta_20")[0].checked==true) {
				correctas += 1;
			} else if ($("#respuesta_21")[0].checked==true) {
				incorrectas += 1;
			} else
			alert("Debes seleccionar una respuesta");

			if (correctas == 7) {
				location.href="resultado.html";
			} else
				alert("Tienes " + correctas + " respuestas correctas y " + incorrectas + " respuestas incorrectas, intentalo denuevo");
		})
});