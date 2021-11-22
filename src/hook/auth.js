import { createContext, useContext, useState } from "react";
import { AuthService } from "service/AuthService";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const authContext = createContext();

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
  };

  const logout = async () => {
    await AuthService.logout();
    setUser(null);
  };
  const createUserWithEmailAndPassword = async (email, password) => {
    console.log(email, password, "email password");
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

  // console.log(user, "user");

  const value = {
    user,
    error,
    loginWithGoogle,
    logout,
    createUserWithEmailAndPassword,
  };
  return <authContext.Provider value={value} {...props} />;
}
