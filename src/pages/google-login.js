import useAuth from "../hook/auth";
import React from "react";
import { useState, useRef } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import "firebase/app";

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

const handleSignup = async (e) => {
  e.preventDefault();

  await createUserWithEmailAndPassword(
    email.current.value,
    password.current.value
  );
};
export default function GoogleLogin() {
  const email = useRef();
  const password = useRef();
  const firstname = useRef();
  const lastname = useRef();
  const { user, loginWithGoogle, error, logout, onAuthStateChanged } =
    useAuth();

  return (
    <div className="container">
      <div className="container-left">
        <div className="wrapper-left">
          <div className="part-one">
            <h1 style={{ fontSize: "12px" }}>
              {" "}
              YOU NEED TO GET THE LOGGED IN USERS DATA AND THEN SAVE THE DATA SO
              THAT AFTER REFRESH IT STAYS{" "}
            </h1>
            <h3>Get started</h3>
            <p>Lets create your account</p>
          </div>

          <div className="inp">
            <form action="" onSubmit={(e) => onSubmit(e)}>
              <label htmlFor="" className="email">
                First Name
              </label>
              <i className="fas fa-envelope envelope"></i>
              <input
                className="inp-left"
                placeholder="mhmmd.rezaei4@gmail.com"
                ref={firstname}
                name="firstname"
                id="firstname"
                required
              />

              <label htmlFor="" className="pass">
                Last Name
              </label>
              <i className="fas fa-lock pass"></i>
              <input
                className="inp-left"
                placeholder="Last Name"
                ref={lastname}
                name="lastname"
                id="lastname"
                required
              />
              <label htmlFor="" className="pass">
                Email
              </label>
              <i className="fas fa-lock pass"></i>
              <input
                className="inp-left"
                ref={email}
                type="email"
                name="email"
                id="email"
                required
              />
              <label htmlFor="" className="pass">
                Password
              </label>
              <i className="fas fa-lock pass"></i>
              <input
                className="inp-left"
                ref={password}
                type="password"
                name="password"
                id="password"
                required
              />
            </form>
          </div>
          <div className="buttons">
            <button className="btn-one">
              Create an account{" "}
              {/* {userData.loading ? <Spin indicator={antIcon} /> : ""} */}
            </button>
            <button onClick={loginWithGoogle} className="btn-two">
              <i className="fab fa-google"></i> Sign up with google
            </button>
          </div>
          <div className="check">
            <label htmlFor="privacy">
              I read and accept the User Agreement and <br />
              Privacy Policy.
              <input id="privacy" type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="down">
            <p>Already have an account?</p>
            <a href="#"> Log in </a>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   {error && <h1>{error}</h1>}
    //   <button style={{ color: "#fff" }} onClick={loginWithGoogle}>
    //     Login
    //   </button>
    //   <button style={{ color: "#fff" }} onClick={logout}>
    //     Logout
    //   </button>
    //   <h1 style={{ color: "#000" }}>{currentuser?.user?.providerId}</h1>
    //   <h1 style={{ color: "#000" }}>{currentuser?.user?.emailVerified}</h1>
    //   <h1 style={{ color: "#000" }}>{currentuser?.user?.displayName}</h1>
    // </div>
  );
}
