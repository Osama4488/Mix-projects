import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export default function Signup() {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
  });
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
    event.preventDefault();
    const { firstname, lastname, email, password, address } = userData;
    if (firstname && lastname && email && password && address) {
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
            address,
          }),
        }
      );
      if (res) {
        setUserData({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
          address: "",
        });
        alert("Data stored");
      } else {
        alert("error");
      }
    } else {
      alert("plzz fill the data");
    }
  };
  return (
    <>
      <div className="container">
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

          {/* <p>Or SignUp Using</p>
        <div className="icons">
          <a href="https://www.facebook.com/" target="blank"
            ><i className="fab fa-facebook-f"></i
          ></a>
          <a href="https://twitter.com/" target="blank"
            ><i className="fab fa-twitter"></i
          ></a>
          <a href="https://mail.google.com/" target="blank"
            ><i className="fab fa-google"></i
          ></a>
        </div> */}
        </form>
      </div>
    </>
  );
}
