var config = {
	apiKey: "AIzaSyA0QmHJmIpn3T9hDZJNwnHCr4fma6SBrVQ",
	authDomain: "bderl-f3a4b.firebaseapp.com",
	databaseURL: "https://bderl-f3a4b.firebaseio.com",
	projectId: "bderl-f3a4b",
	storageBucket: "bderl-f3a4b.appspot.com",
	messagingSenderId: "45995331819"
};
firebase.initializeApp(config);

var cat = document.getElementById('test_firebase');
var dbRef = firebase.database().ref().child('name');
dbRef.on('value', snap => test_firebase.innerText = snap.val());