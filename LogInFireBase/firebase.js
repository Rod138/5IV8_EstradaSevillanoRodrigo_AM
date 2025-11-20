import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1kRwzz4PlSiofAXAFuvtN94m4IFlPr0k",
  authDomain: "prueba-apps-moviles.firebaseapp.com",
  projectId: "prueba-apps-moviles",
  storageBucket: "prueba-apps-moviles.firebasestorage.app",
  messagingSenderId: "345886521392",
  appId: "1:345886521392:web:18fd54ab6f2c165d4255f5",
  measurementId: "G-81T18TRX0C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
