import firebase from "firebase/app";
import firestore from "firebase/firebase-firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDY5jpm8ri5p8O1rzBKdMdmHHGVlFU6XnU",
  authDomain: "vue-live-chat-f0ed5.firebaseapp.com",
  databaseURL: "https://vue-live-chat-f0ed5.firebaseio.com",
  projectId: "vue-live-chat-f0ed5",
  storageBucket: "vue-live-chat-f0ed5.appspot.com",
  messagingSenderId: "42310710027",
  appId: "1:42310710027:web:f822298504ca4ff6"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
