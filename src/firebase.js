import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxxXzp5cbCy37E8stVZW5Og8USbEKYN6I",
  authDomain: "tienda-c31b4.firebaseapp.com",
  projectId: "tienda-c31b4",
  storageBucket: "tienda-c31b4.appspot.com",
  messagingSenderId: "570511519283",
  appId: "1:570511519283:web:12fd2a55f2722fae09bd46"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
////CONEXION FIREBASE