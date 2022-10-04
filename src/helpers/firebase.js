import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBAMxXel1RFNvcvFTNHQouFjX2xYY58saQ",
  authDomain: "snippet-app-92144.firebaseapp.com",
  projectId: "snippet-app-92144",
  storageBucket: "snippet-app-92144.appspot.com",
  messagingSenderId: "26397138017",
  appId: "1:26397138017:web:21b2098955eaa9aa585e20",
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export default firestore;
