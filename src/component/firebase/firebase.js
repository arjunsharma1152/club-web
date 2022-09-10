import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDdIHQVgvrR41zt9OWeqJlG22aZGlMYzKk",
  authDomain: "photopedia-f1ed4.firebaseapp.com",
  projectId: "photopedia-f1ed4",
  storageBucket: "photopedia-f1ed4.appspot.com",
  messagingSenderId: "1053326425602",
  appId: "1:1053326425602:web:1a366d7d03bfe96249b11b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
