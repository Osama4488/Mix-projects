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
        // "https://api.themoviedb.org/3/movie/550?api_key=3c01089df7cfc9ab1236d31e81b0b1dd&query=star+wars"
        "https://api.themoviedb.org/3/search/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&query=star+wars"
      )
      .then((res) => {
        setData(res.data.results);
      });
  }, []);
  console.log(data, "new data");
  return (
    <>
      <section className="home-section">
        {data.map((i) => {
          const url = i.title;
          const res = url.replace(/ /g, "-");
          return (
            <>
              <Link href={`/movie/${i.original_title}`}>
                <motion.a
                  className="home-section-card"
                  whileHover={{
                    scale: 1.1,
                  }}
                  href={`/movie/${res}`}
                >
                  <motion.div
                  // className="home-section-card"
                  // whileHover={{
                  //   scale: 1.1,

                  // }}
                  >
                    <div>
                      <motion.div
                        whileHover={{ scale: 1.1, originX: 0 }}
                        className="home-section-card-title"
                      >
                        {i.title}
                      </motion.div>
                      <div className="home-section-card-description">
                        {i.overview}
                      </div>{" "}
                    </div>

                    <div className="bottom-card">
                      <div>
                        <Moment format="DD/MM/YYYY">{i.release_date}</Moment>
                      </div>
                      <div>{i.vote_average}</div>
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
