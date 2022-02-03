import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import auth from "../hook/auth.js";
import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";

export default function Signin() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    loading: false,
    error: "",
    posted: "",
  });
  let emaill = "";
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await auth().signInWithEmailAndPassword(
        userData.email,
        userData.password
      );
      console.log(user, "user check");
    } catch (e) {
      console.log(e, "error logging in");
    }

    // setLoading(true);

    // let inputKeyword = e.target.elements.search.value;
    // setKeyword(inputKeyword);
    // fetchData(inputKeyword);
    // setpassData(true);
  };
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      <div className="container">
        <div className="container-left">
          <div className="wrapper-left">
            <div className="part-one">
              <h3>Get started</h3>
              <p>Lets create your account</p>
            </div>
            <div className="inp">
              <form action="" onSubmit={(e) => onSubmit(e)}>
                <label htmlFor="" className="email">
                  E-mail{" "}
                </label>
                <i className="fas fa-envelope envelope"></i>
                <input
                  className="inp-left"
                  type="email"
                  value={userData.email}
                  onChange={postUserData}
                  type="email"
                  name="email"
                  id="email"
                  required
                />
                <label htmlFor="" className="pass">
                  Password{" "}
                </label>
                <i className="fas fa-lock pass"></i>
                <input
                  className="inp-left"
                  type="password"
                  value={userData.password}
                  onChange={postUserData}
                  type="password"
                  name="password"
                  id="password"
                  required
                />
              </form>
            </div>
            <div className="buttons">
              <button
                // onClick={auth().signInWithEmailAndPassword()}
                onClick={onSubmit}
                className="btn-one"
              >
                Sign In
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
