import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../firebase-config";

initializeApp(firebaseConfig);

export const db = getFirestore();