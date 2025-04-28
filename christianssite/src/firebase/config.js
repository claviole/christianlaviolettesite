import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4Bu2Tqgr9ulzHyv8NYpnlXWOiSn6VxCc",
  authDomain: "lavioletteportfolio.firebaseapp.com",
  projectId: "lavioletteportfolio",
  storageBucket: "lavioletteportfolio.firebasestorage.app",
  messagingSenderId: "1020555305464",
  appId: "1:1020555305464:web:866e8bcc11fa82fa01b60d",
  measurementId: "G-V5NLM4QF47",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { db, storage, analytics };
