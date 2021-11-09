import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { db } from "../../../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export default function Signup(){
    useEffect(() => {
        getFirebase();
      }, []);
      async function getFirebase() {
        try {
          const docRef = await addDoc(collection(db, "users"), {
            first: "osama",
            last: "asdasd",
            born: 12312312,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }
      const onSubmit = (e) => {
        e.preventDefault();
    
        try {
          
        } catch (e) {
          console.log(e, "error <=== get data movies");
        }
    
        
      };
    return(
        <>  
        <div className="container">
      <form className="form-1" onSubmit={(e) => onSubmit(e)}>
        <h1>Signup</h1>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
        {/* <span>Forgot Password</span> */}
        <button style={{color:"#fff"}}>Login</button>

        

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
    )
}