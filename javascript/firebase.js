// Initialize Firebase
var config = {
	apiKey: "AIzaSyB1CzDumzWLOPSzuR7ZIbEed85DZUHj2HU",
	authDomain: "chat-d1e0b.firebaseapp.com",
	databaseURL: "https://chat-d1e0b.firebaseio.com",
	projectId: "chat-d1e0b",
	storageBucket: "",
	messagingSenderId: "611240885511"
};
firebase.initializeApp(config);

//instancia de Base de Datos 
const database = firebase.database();