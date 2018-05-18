//Pide el nombre al usuario y lo guarda en la variable USER
var user = prompt("Ingresa tu nombre :)", "Tu nombre");

if (user) {
	//Despliega en pantalla el texto Bienvenido más el nombre del usuario
	document.getElementById("welcome").innerHTML = "<span style='color: white;'>Bienvenida</span> "+ user.toUpperCase();

	//Pregunta al usuario si quiere jugar
	var answerPlay = confirm("¿Lista para jugar?");

	//Declara variable con respuesta correcta a la pregunta 1
	var correctAnswer1 = 3
	//Declara variable con respuesta correcta a la pregunta 2
	var correctAnswer2 = 2
	//Declara variable con respuesta correcta a la pregunta 3
	var correctAnswer3 = 1

//Respuestas Primera pregunta
	var textAnswer1a= "Es un operador binario, y su resultado es true (verdadero) sólo si los dos valores dados son verdaderos. Representa la operación lógica and (\"y\").";
	var textAnswer2a= "Devuelve verdadero si cualquiera de los dos valores dados es verdadero. Denota la operación lógica or (\"o\").";
	var textAnswer3a= "Es un operador binario que voltea el valor que se le de; !true produce false y !false produce true. Representa Not (Negación)."; //correctAnswer1
//Respuestas Segunta Pregunta
	var textAnswer1b= "No existe, son lo mismo";
	var textAnswer2b= "undefined significa que no se ha asignado un valor, mientras que null significa que hemos asignado el valor null."; //correctAnswer2
	var textAnswer3b= "undefined no tiene valor y null es un string vacio";
//Respuestas tercera pregunta
	var textAnswer1c= "Crecimiento, Diseño de la experiencia, Desarrollo"; //correctAnswer3
	var textAnswer2c= "Crecimiento , Sprint kick off,  Diseño de la experiencia";
	var textAnswer3c= "Desarrollo, Retrospectiva, Diseño de la Experiencia";

	var question2= "La diferencia entre undefined y null:"

	//Si el usuario SI quiere jugar
	if (answerPlay){
	//Oculta la respuesta negativa
	document.getElementById("noPlay").style.display = "none";
	document.getElementById("gameCancel").style.display = "none";

	//Hace pregunta 1 Respuesta Correcta 3 En Pre-trabajo, Unidad 2, Valores, Tipos de Datos y Programas, Valores Lógicos.
	var firstAnswer = parseInt(prompt("EL OPERADOR ! ES:\n 1. Es un operador binario, y su resultado es true (verdadero) sólo si los dos valores dados son verdaderos.\n\n 2. Devuelve verdadero si cualquiera de los dos valores dados es verdadero. \n\n 3. Es un operador binario que voltea el valor que se le de; !true produce false y !false produce true.", "Elige bien, ¿1, 2 o 3?"));
	//Hace pregunta 2 Respuesta Correcta: 2 En: Pre-trabajo, Unidad 2, Valores, Tipos de Datos y Programas, Quiz, Pregunta 4
	var secondAnswer = parseInt(prompt("Diferencia entre undefined y null*: \n 1. No existe, son lo mismo.\n\n2. Undefined significa que no se ha asignado un valor, null significa que hemos asignado el valor null. \n\n 3. Undefined no tiene valor y null es un string vacio.", "Elige bien, ¿1, 2 o 3?"));
	//Hace pregunta 3 Respuesta Correcta : 1 En: Pre- trabajo, Unidad 3, UX Desing, Quiz, Pregunta 4.
	var thirdAnswer = parseInt(prompt("¿CUÁLES son las 3 ETAPAS EN EL DESARROLLO DE UN PRODUCTO DIGITAL SEGÚN LABORATORIA? \n 1.Crecimiento, Diseño de la experiencia, Desarrollo. \n\n 2.Crecimiento , Sprint kick off,  Diseño de la experiencia. \n\n 3. 3-	Desarrollo, Retrospectiva, Diseño de la Experiencia.", "Elige bien, ¿1, 2 o 3?"));

	//Muestra un alerta de que te va a mostrar la respuesta
		document.getElementById("ready").innerHTML = alert("¡Veamos tus resultados!");
		document.getElementById("ready").style.display = "none";

//Caso 1 Todas las respuestas correctas
		if (firstAnswer == correctAnswer1 && secondAnswer == correctAnswer2 && thirdAnswer == correctAnswer3) {
			document.getElementById("rightAnswers").innerHTML = "<img src='https://image.ibb.co/cK3Bvd/right.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas correctas fueron:<br /> <br />EL OPERADOR ! ES: <br /><br />" + firstAnswer + ": Es un operador binario que voltea el valor que se le dé; !true produce false y !false produce true. Representa Not (Negación)."+"<br /><br /> LA DIFERENCIA ENTRE UNDEFINED Y NULL* <br /><br />" + secondAnswer + ": Undefined significa que no se ha asignado un valor, mientras que null significa que hemos asignado el valor null."+ "<br /><br /> ¿CUÁLES son las 3 ETAPAS EN EL DESARROLLO DE UN PRODUCTO DIGITAL SEGÚN LABORATORIA? <br /><br />" + thirdAnswer+ ": Crecimiento, Diseño de la experiencia, Desarrollo.";
			document.getElementById("wrongAnswers").innerHTML = "<img src='https://image.ibb.co/fynFMJ/wrong.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas incorrectas fueron:<br /><br /> Ninguna, ¡Eres genial y dentro de poco puedes ser una graduada de Laboratoria!";
			document.getElementById("imgTrivia").innerHTML = "<img src='https://image.ibb.co/mOrOad/laboratoria_1.jpg' width='100%'' height='100%' />";

//Caso 2 Todas las respuestas incorrectas
		} else if (firstAnswer != correctAnswer1 && secondAnswer != correctAnswer2 && thirdAnswer != correctAnswer3) {
			document.getElementById("rightAnswers").innerHTML = "<img src='https://image.ibb.co/cK3Bvd/right.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas correctas fueron:<br /><br /> Ninguna, pero continúa aprendiendo <br />¡Tú puedes! :D";
			document.getElementById("wrongAnswers").innerHTML = "<img src='https://image.ibb.co/fynFMJ/wrong.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas incorrectas fueron:<br /> <br />Pregunta 1.-EL OPERADOR ! ES: <br /><br /> La respuesta correcta es: <br />" + correctAnswer1 + ": Un operador binario que voltea el valor que se le dé; !true produce false y !false produce true. Representa Not (Negación)." + "<br /><br /> Pregunta 2.- LA DIFERENCIA ENTRE UNDEFINED Y NULL* <br /><br /> La respuesta correcta es: <br /> " + correctAnswer2 + ": Undefined significa que no se ha asignado un valor, mientras que null significa que hemos asignado el valor null.<br /> <br />" + " Pregunta 3.- ¿CUÁLES son las 3 ETAPAS EN EL DESARROLLO DE UN PRODUCTO DIGITAL SEGÚN LABORATORIA? <br /><br />  La respuesta correcta es: <br />" + correctAnswer3 + ": Crecimiento, Diseño de la experiencia y Desarrollo.";
			document.getElementById("imgTrivia").innerHTML = "<img src='https://image.ibb.co/mOrOad/laboratoria_1.jpg' width='100%'' height='100%' />";

//Caso 3 primera respuesta correcta, segunda y tercera inconrectas.
		} else if (firstAnswer == correctAnswer1 && secondAnswer != correctAnswer2 && thirdAnswer != correctAnswer3) {
			document.getElementById("rightAnswers").innerHTML = "<img src='https://image.ibb.co/cK3Bvd/right.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas correctas fueron:<br /> <br /> Pregunta 1. EL OPERADOR ! ES: <br /><br />" + firstAnswer + ": " + textAnswer3a;
			document.getElementById("wrongAnswers").innerHTML = "<img src='https://image.ibb.co/fynFMJ/wrong.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas incorrectas fueron:<br /> <br />Pregunta 2.-" + question2 + "<br /><br /> Respuesta correcta: <br />" + correctAnswer2 + ": " + textAnswer2b + "<br /> <br />Pregunta 3.- ¿CUÁLES son las 3 ETAPAS EN EL DESARROLLO DE UN PRODUCTO DIGITAL SEGÚN LABORATORIA? <br /><br />" + "Respuesta correcta: <br />" + correctAnswer3 + ": " + textAnswer1c;
			document.getElementById("imgTrivia").innerHTML = "<img src='https://image.ibb.co/mOrOad/laboratoria_1.jpg' width='100%'' height='100%' />";

//Caso 4 primera respusta mal, segunda correcta, tercera mal.
		} else if (firstAnswer != correctAnswer1 && secondAnswer == correctAnswer2 && thirdAnswer != correctAnswer3) {
			document.getElementById("rightAnswers").innerHTML = "<img src='https://image.ibb.co/cK3Bvd/right.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas correctas fueron:<br /><br /> Pregunta 2.- LA DIFERENCIA ENTRE UNDEFINED Y NULL* <br /><br />" + secondAnswer  + ": " + textAnswer2b;
			document.getElementById("wrongAnswers").innerHTML = "<img src='https://image.ibb.co/fynFMJ/wrong.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas incorrectas fueron:<br /><br /> Pregunta 1.- EL OPERADOR ! ES: <br />" + "<br /> La respuesta correcta es: <br />" + correctAnswer1 + ": " + textAnswer3a + "<br /><br /> Pregunta 3.- ¿CUÁLES son las 3 ETAPAS EN EL DESARROLLO DE UN PRODUCTO DIGITAL SEGÚN LABORATORIA? <br />"  + "<br /> Respuesta correcta: <br />" + correctAnswer3 + ": " + textAnswer1c;
			document.getElementById("imgTrivia").innerHTML = "<img src='https://image.ibb.co/mOrOad/laboratoria_1.jpg' width='100%'' height='100%' />";

//Caso 5 primera y segunda respuestas mal, tercera correcta
		} else if (firstAnswer != correctAnswer1 && secondAnswer != correctAnswer2 && thirdAnswer == correctAnswer3) {
			document.getElementById("rightAnswers").innerHTML = "<img src='https://image.ibb.co/cK3Bvd/right.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas correctas fueron:<br /><br /> Pregunta 3.- ¿CUÁLES son las 3 ETAPAS EN EL DESARROLLO DE UN PRODUCTO DIGITAL SEGÚN LABORATORIA? <br />Respuesta correcta: <br />" + thirdAnswer + ": " + textAnswer1c;
			document.getElementById("wrongAnswers").innerHTML = "<img src='https://image.ibb.co/fynFMJ/wrong.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas incorrectas fueron:<br /><br /> Pregunta 1 .- EL OPERADOR ! ES: <br />" + "<br /> Respuesta correcta: <br />" + correctAnswer1 + ": " + textAnswer3a + "<br /><br /> Pregunta 2.- LA DIFERENCIA ENTRE UNDEFINED Y NULL* <br />" + "<br /> Respuesta correcta: <br />" + correctAnswer2 + ": " + textAnswer2b;
			document.getElementById("imgTrivia").innerHTML = "<img src='https://image.ibb.co/mOrOad/laboratoria_1.jpg' width='100%'' height='100%' />";

//Caso 6, Primera y segunda respuestas bien, tercera mal
		} else if (firstAnswer == correctAnswer1 && secondAnswer == correctAnswer2 && thirdAnswer != correctAnswer3) {
			document.getElementById("rightAnswers").innerHTML = "<img src='https://image.ibb.co/cK3Bvd/right.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas correctas fueron:<br /><br /> Pregunta 1.- EL OPERADOR ! ES <br />" + firstAnswer + ": " + textAnswer3a + "<br /><br /> Pregunta 2.- LA DIFERENCIA ENTRE UNDEFINED Y NULL*: <br />" + secondAnswer + ": " + textAnswer2b;
			document.getElementById("wrongAnswers").innerHTML = "<img src='https://image.ibb.co/fynFMJ/wrong.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas incorrectas fueron:<br /><br /> Pregunta 3.- ¿CUÁLES son las 3 ETAPAS EN EL DESARROLLO DE UN PRODUCTO DIGITAL SEGÚN LABORATORIA? <br />"  + "<br /> Respuesta correcta: <br />" + correctAnswer3 + ": " + textAnswer1c;
			document.getElementById("imgTrivia").innerHTML = "<img src='https://image.ibb.co/mOrOad/laboratoria_1.jpg' width='100%'' height='100%' />";

//Caso 7 Primera respuesta mal, segunda y tercera correctas
		} else if (firstAnswer != correctAnswer1 && secondAnswer == correctAnswer2 && thirdAnswer == correctAnswer3) {
			document.getElementById("rightAnswers").innerHTML = "<img src='https://image.ibb.co/cK3Bvd/right.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas correctas fueron:<br /><br /> Pregunta 2.- LA DIFERENCIA ENTRE UNDEFINED Y NULL*: <br />" + secondAnswer + ": " + textAnswer2b + "<br /><br /> Pregunta 3.- ¿CUÁLES son las 3 ETAPAS EN EL DESARROLLO DE UN PRODUCTO DIGITAL SEGÚN LABORATORIA? <br />" + thirdAnswer + ": " + textAnswer1c;
			document.getElementById("wrongAnswers").innerHTML = "<img src='https://image.ibb.co/fynFMJ/wrong.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas incorrectas fueron:<br /><br /> Pregunta 1.- EL OPERADOR ! ES:  <br />" +  "<br /> Respuesta correcta: <br />" + correctAnswer1 + ": " + textAnswer3a;
			document.getElementById("imgTrivia").innerHTML = "<img src='https://image.ibb.co/mOrOad/laboratoria_1.jpg' width='100%'' height='100%' />";

//Caso 8, Primera respuesta correcta, segunda inconrrecta, tercera correcta.
		} else if (firstAnswer == correctAnswer1 && secondAnswer != correctAnswer2 && thirdAnswer == correctAnswer3) {
			document.getElementById("rightAnswers").innerHTML = "<img src='https://image.ibb.co/cK3Bvd/right.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas correctas fueron:<br /><br /> Pregunta 1.- EL OPERADOR ! ES: <br />" + firstAnswer + ": " + textAnswer3a + "<br /><br /> Pregunta 3.- ¿CUÁLES son las 3 ETAPAS EN EL DESARROLLO DE UN PRODUCTO DIGITAL SEGÚN LABORATORIA? <br />" + thirdAnswer + ": " + textAnswer1c;
			document.getElementById("wrongAnswers").innerHTML = "<img src='https://image.ibb.co/fynFMJ/wrong.png' width='50%'' height='50%' /> <br /> <br /> <br />" + "Tus respuestas incorrectas fueron:<br /><br /> Pregunta 2.- LA DIFERENCIA ENTRE UNDEFINED Y NULL* <br />" + "<br /> Respuesta correcta: <br />" + correctAnswer2 + ": " + textAnswer2b;
			document.getElementById("imgTrivia").innerHTML = "<img src='https://image.ibb.co/mOrOad/laboratoria_1.jpg' width='100%'' height='100%' />";
		} 

		}

	//Si el usuario NO quiere jugar
	else {

		//Oculta la opción que se da cuando se cancela el juego
		document.getElementById("gameCancel").style.display = "none";

		//Muestra mensaje de despedida
		document.getElementById("noPlay").innerHTML = "¡JUGAREMOS LA PROXIMA VEZ!";

		//Oculta la respuesta positiva
		document.getElementById("rightAnswers").style.display = "none";
		document.getElementById("wrongAnswers").style.display = "none";


	}

} else{
	document.getElementById("gameCancel").innerHTML = "<span style='font-weight: bold;'>Error:</span> <br /> <br /> No me diste tu nombre :(";
	document.getElementById("noPlay").style.display = "none"
	//Oculta la respuesta positiva
	document.getElementById("rightAnswers").style.display = "none";
	document.getElementById("wrongAnswers").style.display = "none";
};