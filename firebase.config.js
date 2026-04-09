import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyDl6DY6-7kovW_MNxwM0J8Dm3rtiQQzrIE",
    authDomain: "appparaibe-se.firebaseapp.com",
    projectId: "appparaibe-se",
    storageBucket: "appparaibe-se.appspot.com",
    messagingSenderId: "150689283014",
    appId: "1:150689283014:web:5a568f2f8673fb37a110c7"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Firebase JS SDK v11+: em ambiente React Native a persistência com
// AsyncStorage é aplicada automaticamente ao chamar initializeAuth(app).
let auth;
try {
    auth = initializeAuth(app);
} catch (error) {
    // Se já foi inicializado (hot reload, por ex.), reutiliza a instância.
    console.warn('initializeAuth falhou, usando getAuth() como fallback:', error);
    auth = getAuth(app);
}

export { auth, firestore };
export default app;
