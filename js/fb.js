// Initialize Firebase
var config = {
  apiKey: "AIzaSyA0QmHJmIpn3T9hDZJNwnHCr4fma6SBrVQ",
  authDomain: "bderl-f3a4b.firebaseapp.com",
  databaseURL: "https://bderl-f3a4b.firebaseio.com",
  projectId: "bderl-f3a4b",
  storageBucket: "bderl-f3a4b.appspot.com",
  messagingSenderId: "45995331819"
};

firebase.initializeApp(config);

var n_1 = document.getElementById('news_1');
var d_1 = document.getElementById('details_1');
var l_1 = document.getElementById('link_1');
var il_1 = document.getElementById('img_link_1');

var n_2 = document.getElementById('news_2');
var d_2 = document.getElementById('details_2');
var l_2 = document.getElementById('link_2');
var il_2 = document.getElementById('img_link_2');

var n_3 = document.getElementById('news_3');
var d_3 = document.getElementById('details_3');
var l_3 = document.getElementById('link_3');
var il_3 = document.getElementById('img_link_3');

var n_4 = document.getElementById('news_4');
var d_4 = document.getElementById('details_4');
var l_4 = document.getElementById('link_4');
var il_4 = document.getElementById('img_link_4');

var dbRef_news_1 = firebase.database().ref().child('news_1');
var dbRef_details_1 = firebase.database().ref().child('details_1');
var dbRef_link_1 = firebase.database().ref().child('link_1');
var dbRef_image_link_1 = firebase.database().ref().child('img_link_1');

var dbRef_news_2 = firebase.database().ref().child('news_2');
var dbRef_details_2 = firebase.database().ref().child('details_2');
var dbRef_link_2 = firebase.database().ref().child('link_2');
var dbRef_image_link_2 = firebase.database().ref().child('img_link_2');

var dbRef_news_3 = firebase.database().ref().child('news_3');
var dbRef_details_3 = firebase.database().ref().child('details_3');
var dbRef_link_3 = firebase.database().ref().child('link_3');
var dbRef_image_link_3 = firebase.database().ref().child('img_link_3');

var dbRef_news_4 = firebase.database().ref().child('news_4');
var dbRef_details_4 = firebase.database().ref().child('details_4');
var dbRef_link_4 = firebase.database().ref().child('link_4');
var dbRef_image_link_4 = firebase.database().ref().child('img_link_4');

dbRef_news_1.on('value', snap => n_1.innerText = snap.val());
dbRef_details_1.on('value', snap => d_1.innerText = snap.val());
dbRef_link_1.on('value', snap => l_1.href = snap.val());
dbRef_image_link_1.on('value', snap => il_1.src = snap.val());

dbRef_news_2.on('value', snap => n_2.innerText = snap.val());
dbRef_details_2.on('value', snap => d_2.innerText = snap.val());
dbRef_link_2.on('value', snap => l_2.href = snap.val());
dbRef_image_link_2.on('value', snap => il_2.src = snap.val());

dbRef_news_3.on('value', snap => n_3.innerText = snap.val());
dbRef_details_3.on('value', snap => d_3.innerText = snap.val());
dbRef_link_3.on('value', snap => l_3.href = snap.val());
dbRef_image_link_3.on('value', snap => il_3.src = snap.val());

dbRef_news_4.on('value', snap => n_4.innerText = snap.val());
dbRef_details_4.on('value', snap => d_4.innerText = snap.val());
dbRef_link_4.on('value', snap => l_4.href = snap.val());
dbRef_image_link_4.on('value', snap => il_4.src = snap.val());
