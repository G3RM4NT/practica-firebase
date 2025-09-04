import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBVZVP3v3dGcmq2x05Wi40K62ILdHVduac",
  authDomain: "evalluacion-firebase-parejas.firebaseapp.com",
  projectId: "evalluacion-firebase-parejas",
  storageBucket: "evalluacion-firebase-parejas.appspot.com",
  messagingSenderId: "987482833647",
  appId: "1:987482833647:web:7c0ef3a357b10dade8511a"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar servicios
const auth = getAuth(app);
const database = getFirestore(app);

// Exportar para usar en toda la app
export { auth, database };
