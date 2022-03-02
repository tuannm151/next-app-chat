import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARluvQU8F7zDesbNuzwL46RjFQ6ZkaQKg",
  authDomain: "dots-chat-app.firebaseapp.com",
  projectId: "dots-chat-app",
  storageBucket: "dots-chat-app.appspot.com",
  messagingSenderId: "318301731323",
  appId: "1:318301731323:web:d533397d2493682afa735e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
