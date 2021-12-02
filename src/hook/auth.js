import { createContext, useContext, useEffect, useState } from "react";
import { AuthService } from "service/AuthService";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const authContext = createContext();
const auth = getAuth();
export default function useAuth() {
  return useContext(authContext);
}

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // let onAuthStateChanged;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        setUser(user);
        setLoading(false);

        // ...
      } else {
        // User is signed out
        // ...
        setLoading(false);

        console.log(user, "user logged out ");
      }
    });
  }, []);
  const loginWithGoogle = async () => {
    try {
      const { error, user } = await AuthService.loginWithGoogle();

      setUser(user ?? null);
    } catch (e) {
      console.log(e, "e mesasge");
    }
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

  const value = {
    user,
    error,
    loginWithGoogle,
    logout,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
  };
  return (
    <authContext.Provider value={value} {...props}>
      {loading ? <div>Loading...</div> : props.children}
    </authContext.Provider>
  );
}
