import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password, photo) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password, photo);
  };

  // Log in user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out user
  const signOutUser = () => {
    return signOut(auth);
  };

  //observe  auth state change
  // useEffect(() => {
  //   const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     console.log("Current value of the current user", currentUser);
  //     setUser(currentUser);
  //     setLoading(false);
  //   });
  //   return () => {
  //     unSubscribe();
  //   };
  // }, []);

  const authInfo = {
    setUser,
    user,
    logInUser,
    loading,
    createUser,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
