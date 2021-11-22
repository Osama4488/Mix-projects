import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../firebase-config.js";
import { getDatabase } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
import { Spin, Alert } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { onValue } from "firebase/database";
import { useRef } from "react";
import { AuthService } from "../../service/AuthService.js";

export default function Signup() {
  const { createUserWithEmailAndPassword, error } = AuthService;
  const email = useRef();
  const password = useRef();

  const handleSignup = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(
      email.current.value,
      password.current.value
    );
  };

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
              <form action="" onSubmit={(e) => handleSignup(e)}>
                {/* <label htmlFor="" className="email">
                  First Name
                </label>
                <i className="fas fa-envelope envelope"></i>
                <input
                  className="inp-left"
                  placeholder="mhmmd.rezaei4@gmail.com"
                  ref={email}
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
                  ref={password}
                  name="lastname"
                  id="lastname"
                  required
                /> */}

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

                <button>Register</button>
                {/* <label htmlFor="" className="pass">
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
                /> */}
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
