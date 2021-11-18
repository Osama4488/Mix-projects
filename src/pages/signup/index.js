import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../firebase.js";
import { getDatabase } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";
import { Spin, Alert } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { ref, onValue } from "firebase/database";
export default function Signup() {
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
  const [newEmail, setNewEmail] = useState("");
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  // useEffect(() => {
  //   const db = getDatabase();
  //   const starCountRef = ref(db, "users");
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();

  //     dbEmail =
  //       Object.keys(data)
  //         .map((key) => {
  //           console.log(key, "id");
  //           const newData = data[key];
  //           return newData;
  //         })
  //         .find((el) => el.email === "as@asdasdasdasd") || [];

  //   });
  //   setUserData({ ...userData, email: dbEmail });

  // }, []);
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

  function getDbUsers() {
    let dbEmail = [];
    let jj = "";
    const db = getDatabase();
    const starCountRef = ref(db, "users");
    onValue(starCountRef, async (snapshot) => {
      const data = snapshot.val();
      dbEmail =
        Object.keys(data)
          .map((key) => {
            const newData = data[key];
            return newData;
          })
          .find((el) => el.email === userData.email) || [];
      const dbfound = dbEmail.email;
      if (userData.email === dbfound) {
        console.log(userData.email, "count");
        setUserData({ ...userData, error: "exist" });
      } else {
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
              error: "success",
            });
          } else {
            setUserData({ ...userData, error: "true" });
          }
        } else {
          setUserData({ ...userData, error: "empty" });
        }
      }
    });
  }
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmitFirebase = (event) => {
    event.preventDefault();

    setUserData({ ...userData, loading: true });
    getDbUsers();
  };
  console.log(userData, "userdata");
  return (
    <>
      <div className="container">
        <div className="container-left">
          <div className="wrapper-left">
            <div className="part-one">
              <h3>Get started</h3>
              <p>Lets create your account</p>
            </div>

            {userData.error === "success" && (
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
            ) : userData.error === "exist" ? (
              <Alert
                message="Error"
                description="User already exist"
                type="error"
                showIcon
              />
            ) : (
              <> </>
            )}
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
