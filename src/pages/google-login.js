import useAuth from "../hook/auth";
import React from "react";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import "firebase/app";
import { onAuthStateChanged } from "firebase/auth";
const provider = new GoogleAuthProvider();
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

// const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;

    // ...
  } else {
    // User is signed out
    // ...
  }
});

export default function GoogleLogin() {
  const { user, loginWithGoogle, error, logout } = useAuth();
  console.log(user, "user info");
  return (
    <div>
      {error && <h1>{error}</h1>}
      <button style={{ color: "#fff" }} onClick={loginWithGoogle}>
        Login
      </button>
      <button style={{ color: "#fff" }} onClick={logout}>
        Logout
      </button>
      <h1 style={{ color: "#000" }}>{user?.user?.email}</h1>
      <h1 style={{ color: "#000" }}>{user?.user?.emailVerified}</h1>
      <h1 style={{ color: "#000" }}>{user?.providerId}</h1>
    </div>
  );
}
