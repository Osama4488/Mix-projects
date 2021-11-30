import { createContext, useContext, useState } from "react";
import { AuthService } from "service/AuthService";
import { getAuth } from "firebase/auth";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const authContext = createContext();
const auth = getAuth();
export default function useAuth() {
  return useContext(authContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const loginWithGoogle = async () => {
    const { error, user } = await AuthService.loginWithGoogle();
    setUser(user ?? null);
    setUser(error ?? "");
    // console.log(user, "user");
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
    console.log(user, "user");
  };
  const createUserWithEmailAndPassword = async (email, password) => {
    // console.log(email, password, "email password");
    if (email && password) {
      const { user, error } = await AuthService.createUserWithEmailAndPassword(
        email,
        password
      );
      if (error) {
        setError(error);
        return;
      }
      setUser(user ?? null);
    } else {
      setError("Email and Password cannot be empty");
    }
  };
  const onAuthStateChanged =
    (auth,
    (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        return uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

  const value = {
    user,
    error,
    loginWithGoogle,
    logout,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  };
  return <authContext.Provider value={value} {...props} />;
}
