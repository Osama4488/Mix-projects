import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";

import { ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";

export default function Signin() {
  const [users, setUsers] = useState([
    {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  ]);
  let email = "";
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, "users");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      email =
        Object.keys(data)
          .map((key) => {
            console.log(key, "id");
            const newData = data[key];
            return newData;
          })
          .find((el) => el.email === "yahya@gmail.com") || [];
      console.log(email.email, "asdmaiosndoiasnd");
    });
    console.log(starCountRef, "a");
  }, []);
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
              <form action="">
                <label htmlFor="" className="email">
                  E-mail{" "}
                </label>
                <i className="fas fa-envelope envelope"></i>
                <input
                  className="inp-left"
                  type="email"
                  placeholder="mhmmd.rezaei4@gmail.com"
                />
                <label htmlFor="" className="pass">
                  Password{" "}
                </label>
                <i className="fas fa-lock pass"></i>
                <input
                  className="inp-left"
                  type="password"
                  placeholder="8+ characters, 2 numbers"
                  name=""
                  id=""
                />
              </form>
            </div>
            <div className="buttons">
              <button className="btn-one">Create an account</button>
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
