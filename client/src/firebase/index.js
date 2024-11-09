import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_FIREBASE,
  authDomain: "ojt-group2.firebaseapp.com",
  projectId: "ojt-group2",
  storageBucket: "ojt-group2.firebasestorage.app",
  messagingSenderId: "112980188055",
  appId: "1:112980188055:web:ab7de835231b6f830a02d2"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)