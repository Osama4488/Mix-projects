import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { db } from "../../../firebase.js";
import { collection, addDoc } from "firebase/firestore";
export default function Single() {
  const router = useRouter();
  const id = router.query.single;
  // useEffect(() => {
  //   getFirebase();
  // }, []);
  // async function getFirebase() {
  //   try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //       first: "asdasdas",
  //       last: "asdasd",
  //       born: 12312312,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }
  return (
    <>
      {/* <div>{id}</div> */}
      <section className="single-section">
        <div className="single-section-container">
          <div className="single-left">
            <img
              className="single-main-img"
              src="https://i.ytimg.com/vi_webp/LlH1CJfrgZs/maxresdefault.webp"
            />
            <div className="flex-left-bottom">
              <div className="left-small-img">
                {" "}
                <img
                  className="left-small-img-img"
                  src="https://i.ytimg.com/vi_webp/LlH1CJfrgZs/maxresdefault.webp"
                />{" "}
              </div>
              <div className="flex-left-bottom-right">
                <div className="flex-left-bottom-right-title">
                  The walking Dead{" "}
                </div>
                <div className="flex-left-bottom-right-desc">
                  Sheriff Deputy Rick Grimes wakes up from a coma to learn the
                  world is in ruins, and must lead a group of survivors to stay
                  alive.
                </div>
                <div className="movie-info-flex">
                  <div className="movie-info-flex-wrapper">Rating: 8.4 </div>
                  <div className="movie-info-flex-wrapper">Rating: 8.4 </div>
                  <div className="movie-info-flex-wrapper">Rating: 8.4 </div>
                  <div className="movie-info-flex-wrapper">Rating: 8.4 </div>
                  <div className="movie-info-flex-wrapper">Rating: 8.4 </div>
                  <div className="movie-info-flex-wrapper">Rating: 8.4 </div>
                  <div className="movie-info-flex-wrapper">Rating: 8.4 </div>
                  <div className="movie-info-flex-wrapper">Rating: 8.4 </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-right">
            <div className="single-right-heading">Latest Updates</div>
          </div>
        </div>
      </section>
    </>
  );
}
