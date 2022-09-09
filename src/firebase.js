import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDUpBrdJ8LPlIXgVu8O1cRztMioldU-mts",
  authDomain: "club-web-84757.firebaseapp.com",
  projectId: "club-web-84757",
  storageBucket: "club-web-84757.appspot.com",
  messagingSenderId: "167935593178",
  appId: "1:167935593178:web:6513a9687b449f76d3f3e3",
  measurementId: "G-MB4ZMJX8C2",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
