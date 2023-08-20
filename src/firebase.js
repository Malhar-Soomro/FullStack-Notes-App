// import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"




const firebaseConfig = {
    apiKey: "AIzaSyCJOPH0YA6PIZG_TC6e5JibLETofr1_2TI",
    authDomain: "full-stack-notes-app-dev.firebaseapp.com",
    projectId: "full-stack-notes-app-dev",
    storageBucket: "full-stack-notes-app-dev.appspot.com",
    messagingSenderId: "556340577138",
    appId: "1:556340577138:web:8f7559df5659ba226193eb",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


