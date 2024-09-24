import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDupDcLfDH0MUnRTuLkUsi-cCkBvnI6UIk",
  authDomain: "appbdcripto.firebaseapp.com",
  projectId: "appbdcripto",
  storageBucket: "appbdcripto.appspot.com",
  messagingSenderId: "797896324078",
  appId: "1:797896324078:web:cf735d123996e80c5f94ff"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);