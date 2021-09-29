import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "antd";
import { motion } from "framer-motion";
import Moment from "react-moment";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Link from "next/link";
export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=d0a135171d58c78f1c69bcca1de4b35d&language=en-US"
      )
      .then((res) => {
        setData(res.data.genres);
      });
  }, []);
  console.log(data, "new data");
  return (
    <>
      <h1
        style={{
          backgroundColor: "#000",
          color: "#fff",
          margin: "0px",
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        Genres
      </h1>
      <section className="home-section">
        {data.map((i) => {
          return (
            <>
              <Link href={`/movie/genre/${i.name}`}>
                <motion.a
                  className="home-section-card"
                  whileHover={{
                    scale: 1.1,
                  }}
                  href={`/movie/genre/${i.name}`}
                >
                  <motion.div>
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.1, originX: 0 }}
                        className="home-section-card-title"
                      >
                        {i.name}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.a>
              </Link>
            </>
          );
        })}
      </section>
    </>
  );
}
