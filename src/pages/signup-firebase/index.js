import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../firebase-config";
import { getDatabase } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
// import { doc, setDoc } from "firebase/firestore";
import { Spin, Alert } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { onValue } from "firebase/database";
import { useRef } from "react";
import { AuthService } from "../../service/AuthService.js";
import useAuth from "../../hook/auth";
export default function Signup() {
  // const { createUserWithEmailAndPassword, error } = AuthService;
  const {
    user,
    createUserWithEmailAndPassword,
    error,
    logout,
    onAuthStateChanged,
  } = useAuth();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    dbemail: "",
    password: "",
    loading: false,
    error: "",
    posted: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const onSubmitFirebase = async (event) => {
    event.preventDefault();

    setUserData({ ...userData, loading: true });
    // await createUserWithEmailAndPassword(userData.email, userData.password);
    const docRef = await addDoc(collection(db, "users"), {
      email: userData.email,
      password: userData.password,
    });
  };

  // console.log(userData.email, "email", "email");

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   // const email = useRef();
  //   // const password = useRef();

  //   await createUserWithEmailAndPassword(
  //     email.current.value,
  //     password.current.value
  //   );
  //   // getFirebase();
  // };
  async function getFirebase() {
    try {
      alert("inside try");
      const docRef = await addDoc(collection(db, "users"), {
        first: "osama",
        last: "asdasdasdasd",
        born: "12312312",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      alert("inside catch");

      console.error("Error adding document: ", e);
    }
  }

  // console.log(onAuthStateChanged, "oNAuthstatechnaged");

  return (
    <>
      <div className="container">
        <div className="container-left">
          <div className="wrapper-left">
            <div className="part-one">
              <h3>Get started</h3>
              {error && <h1>{error}</h1>}

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
                  value={userData.firstname}
                  onChange={postUserData}
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
                  value={userData.lastname}
                  onChange={postUserData}
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
                  value={userData.email}
                  onChange={postUserData}
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
                  value={userData.password}
                  onChange={postUserData}
                  type="password"
                  name="password"
                  id="password"
                  required
                />
                <button onClick={onSubmitFirebase}>
                  Create an Account on Firestore
                </button>
              </form>
            </div>
            {/* <div className="buttons">
              <button onClick={onSubmitFirebase} className="btn-one">
                Create an account{" "}
                {userData.loading ? <Spin indicator={antIcon} /> : ""}
              </button>
              <button className="btn-two">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
