import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyD_9Gk-_FIJ62px_BNs12MSX-kLgi9suy4",
    authDomain: "appparaibe-se-27b9a.firebaseapp.com",
    projectId: "appparaibe-se-27b9a",
    storageBucket: "appparaibe-se-27b9a.firebasestorage.app",
    messagingSenderId: "81600759865",
    appId: "1:81600759865:web:ec0a4b88dc388ace69a5e8"
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
