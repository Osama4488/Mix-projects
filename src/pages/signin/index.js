import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase.js";
import { collection, addDoc } from "firebase/firestore";

export default function Signin() {
  const docRef = doc(db, "users");
  const docSnap = getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  return <></>;
}
