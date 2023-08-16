import { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

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

  return {
    user,
    error,
    loading,
    signInWithGoogle,
  };
};

export default useFirebase;
