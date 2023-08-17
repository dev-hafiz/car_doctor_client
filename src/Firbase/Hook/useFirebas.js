import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  //User error and loading state
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  //googleProvider
  const googleProvider = new GoogleAuthProvider();

  //google login
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //register with email & password
  const registerWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .cath((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //Observer currently signed-in user or not
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });

    return () => unSubscribe();
  });

  return {
    user,
    error,
    loading,
    signInWithGoogle,
    registerWithEmailAndPassword,
  };
};

export default useFirebase;
