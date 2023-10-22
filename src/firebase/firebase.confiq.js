// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2J0EV51vnUUd3OovjUxwBoSHpOEJOukE",
  authDomain: "winbdt-client.firebaseapp.com",
  projectId: "winbdt-client",
  storageBucket: "winbdt-client.appspot.com",
  messagingSenderId: "525469868858",
  appId: "1:525469868858:web:5c792bfdb2b2f119b92603"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;