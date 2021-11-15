import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../firebase.js";
import { collection, addDoc } from "firebase/firestore";
import { Spin, Alert } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
export default function Signup() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    loading: false,
    error: "",
    posted: "",
  });
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  useEffect(() => {
    // getFirebase();
  }, []);
  // async function getFirebase() {
  //   try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //       first: "osama",
  //       last: "asdasd",
  //       born: 12312312,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   let email = e.target.elements.email.value;
  //   let password = e.target.elements.password.value;

  //   try {
  //     try {
  //       const docRef = addDoc(collection(db, "users"), {
  //         email: email,
  //         password: password,
  //         born: 12312312,
  //       });
  //       console.log("Document written with ID: ", docRef.id);
  //     } catch (e) {
  //       console.error("Error adding document: ", e);
  //     }
  //   } catch (e) {
  //     console.log(e, "error <=== get data movies");
  //   }
  // };
  const onSubmitFirebase = async (event) => {
    setUserData({ ...userData, loading: true });
    event.preventDefault();
    const { firstname, lastname, email, password } = userData;
    if (firstname && lastname && email && password) {
      const res = await fetch(
        "https://osamaflix-17d99-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            email,
            password,
          }),
        }
      );
      if (res) {
        setUserData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          loading: false,
          posted: "true",
        });
      } else {
        setUserData({ ...userData, error: "true", posted: "false" });
      }
    } else {
      setUserData({ ...userData, error: "empty", posted: "false" });
    }
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

            {userData.posted === "true" && (
              <Alert
                description="User has sucessfully been Registered"
                type="success"
                showIcon
              />
            )}
            {userData.error === "true" ? (
              <Alert
                message="Error"
                description="This is an error while doing signup please try again"
                type="error"
                showIcon
              />
            ) : userData.error === "empty" ? (
              <Alert
                message="Error"
                description="Please fill all fields"
                type="error"
                showIcon
              />
            ) : (
              <> </>
            )}
            <div className="inp">
              <form action="" onSubmit={(e) => onSubmit(e)}>
                <label for="" className="email">
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

                <label for="" className="pass">
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
                <label for="" className="pass">
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
                <label for="" className="pass">
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
              </form>
            </div>
            <div className="buttons">
              <button onClick={onSubmitFirebase} className="btn-one">
                Create an account{" "}
                {userData.loading ? <Spin indicator={antIcon} /> : ""}
              </button>
              <button className="btn-two">
                <i className="fab fa-google"></i> Sign up with google
              </button>
            </div>
            <div className="check">
              <label for="privacy">
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

      {/* end */}
      {/* <div className="container">
        <form className="form-1" onSubmit={(e) => onSubmit(e)}>
          <h1>Signup</h1>
          <label htmlFor="First Name">First Name</label>
          <input
            value={userData.firstname}
            onChange={postUserData}
            name="firstname"
            id="firstname"
            required
          />
          <label htmlFor="Last Name">Last Name</label>
          <input
            value={userData.lastname}
            onChange={postUserData}
            name="lastname"
            id="lastname"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            value={userData.email}
            onChange={postUserData}
            type="email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            value={userData.password}
            onChange={postUserData}
            type="password"
            name="password"
            id="password"
            required
          />

          <button onClick={onSubmitFirebase} style={{ color: "#fff" }}>
            Login
          </button>

         
        </form>
      </div> */}
    </>
  );
}
