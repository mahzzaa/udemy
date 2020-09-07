import * as firebase from "firebase";
import  'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyDlZHtjWDUQIojQEcKGCzp3R33KxAY2upw",
    authDomain: "project-e5e84.firebaseapp.com",
    databaseURL: "https://project-e5e84.firebaseio.com",
    projectId: "project-e5e84",
    storageBucket: "project-e5e84.appspot.com",
    messagingSenderId: "375716073137",
    appId: "1:375716073137:web:f075b8fff134f6d1011c90",
    measurementId: "G-3FL8WC2WF4"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
export default db;