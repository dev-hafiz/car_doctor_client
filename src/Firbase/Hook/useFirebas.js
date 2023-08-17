import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

import initializeAuthentication from "../Firebase/firebase.init";
import Swal from "sweetalert2";

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
  const registerWithEmailAndPassword = (email, password, name) => {
    console.log("From firebase", email, password, name);
    createUserWithEmailAndPassword(auth, email, password, name)
      .then((result) => {
        const user = result.user;
        updateUserProfile(name);
        setUser(user);
        Swal.fire({
          icon: "success",
          title: "Your account has been created successfully",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //update user profile
  const updateUserProfile = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    }).catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    });
  };

  //login with email & password
  const loginWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
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
    loginWithEmailAndPassword,
  };
};

export default useFirebase;
