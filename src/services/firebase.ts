import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyCwxrHbUO38GxqybcUtDX6JgY-bMBIss50",
  authDomain: "receiptdb-5917d.firebaseapp.com",
  projectId: "receiptdb-5917d",
  storageBucket: "receiptdb-5917d.appspot.com",
  messagingSenderId: "976623681230",
  appId: "1:976623681230:web:4cba79155c6266a871da9f",
  measurementId: "G-KX0E153DG0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const {
      user: { providerData },
    } = await signInWithPopup(auth, provider);
    return {
      name: providerData[0].displayName,
      email: providerData[0].email,
      id: providerData[0].uid,
    };
  } catch (error) {
    console.log(error);
  }
};
