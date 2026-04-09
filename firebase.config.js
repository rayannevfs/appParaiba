import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyDl6DY6-7kovW_MNxwM0J8Dm3rtiQQzrIE",
    authDomain: "appparaibe-se.firebaseapp.com",
    projectId: "appparaibe-se",
    storageBucket: "appparaibe-se.appspot.com",
    messagingSenderId: "150689283014",
    appId: "1:150689283014:web:5a568f2f8673fb37a110c7"
};

let app;
let auth;
let firestore;

try {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage),
    });
    firestore = getFirestore(app);
} catch (error) {
    console.warn('Firebase initialization failed:', error);
}

export { auth, firestore };
export default app;
