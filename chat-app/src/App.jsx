import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader/Loader";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const __app = initializeApp({
  apiKey: "AIzaSyCgOZ2pR5-FqhUXcju2iBaYH1zQL_RJkv8",
  authDomain: "chat-test-5c768.firebaseapp.com",
  projectId: "chat-test-5c768",
  storageBucket: "chat-test-5c768.appspot.com",
  messagingSenderId: "889187552846",
  appId: "1:889187552846:web:47ca819e4c1e45c95f7d1f",
  measurementId: "G-LMC5YE0N7C",
});

const firestore = getFirestore(__app);
const auth = getAuth(__app);
const provider = new GoogleAuthProvider();
const login = async () => {
  await signInWithPopup(auth, provider);
};
export const Context = createContext(null);

const App = () => {
  const [, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <Context.Provider
      value={{
        auth,
        firestore,
        provider,
        login,
      }}
    >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </Context.Provider>
  );
};

export default App;
