import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

//aca poner la configuracion del firebaseCofig
const firebaseConfig = {
    apiKey: "AIzaSyDqYvd2AZf1Dpbah0omTKmQF2LSuXZR1I0",
    authDomain: "ecomerce12012024.firebaseapp.com",
    projectId: "ecomerce12012024",
    storageBucket: "ecomerce12012024.appspot.com",
    messagingSenderId: "270594122844",
    appId: "1:270594122844:web:7d509d3266be0d906ab299"
  };


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)