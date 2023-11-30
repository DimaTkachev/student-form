// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA62IrTzB18IKKFQ3iKC3zGpHOiOgi0l8M",
  authDomain: "student-form-crud.firebaseapp.com",
  databaseURL: "https://student-form-crud-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "student-form-crud",
  storageBucket: "student-form-crud.appspot.com",
  messagingSenderId: "179657834704",
  appId: "1:179657834704:web:46e8deee38f373fad61ed5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);