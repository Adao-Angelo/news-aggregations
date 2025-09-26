import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "news-aggregations.firebaseapp.com",
  projectId: "news-aggregations",
  storageBucket: "news-aggregations.firebasestorage.app",
  messagingSenderId: "8000402479",
  appId: "1:8000402479:web:53755742f134cc501242da",
  measurementId: "G-14DHEN4LV2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
