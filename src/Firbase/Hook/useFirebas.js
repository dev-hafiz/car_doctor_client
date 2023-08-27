import { useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
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

  //google and facebook Provider
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  //google login
  const signInWithGoogle = (location, navigate) => {
    let from = location.state?.from?.pathname || "/";

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  //facebook login
  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  //Method: register with email & password
  const registerWithEmailAndPassword = (
    email,
    password,
    name,
    photoUrl,
    location,
    navigate
  ) => {
    let from = location.state?.from?.pathname || "/";

    createUserWithEmailAndPassword(auth, email, password, name, photoUrl)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        updateUserProfile(name, photoUrl);
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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //Method: update user profile
  const updateUserProfile = (name, photoUrl) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    }).catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    });
  };

  //Method: login with email & password
  const loginWithEmailAndPassword = (email, password, location, navigate) => {
    let from = location.state?.from?.pathname || "/";
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //Method: Observer currently signed-in user or not
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        if (user && user.email) {
          // Post user email for JWT verification
          const loggedUser = { email: user.email };
          fetch(`http://localhost:5000/jwt`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(loggedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              localStorage.setItem("car-access-token", data.token);
            });
        } else {
          localStorage.removeItem("car-access-token");
        }
      } else {
        setUser({});
      }
      setLoading(false);
    });

    return () => unSubscribe();
  });

  //Method: logout method
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
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
    signInWithFacebook,
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    logOut,
  };
};

export default useFirebase;
