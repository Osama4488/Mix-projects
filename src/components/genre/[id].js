import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Moment from "react-moment";

export default function Id() {
  const router = useRouter();
  const { id } = router.query;
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&language=en-US&query=${id}&page=1&include_adult=false`
  //     )
  //     .then((res) => {
  //       setData(res.data.results);
  //     });
  // }, []);
  //   const result = data.filter((p) => p.title === id);
  // console.log(data, "genre movies");
  return (
    <>
      <h1>{id}</h1>
      {/* <section className="home-section">
        {data.map((i) => {
          const url = i.title;
          const res = url.replace(/ /g, "-");
          return (
            <>
              <Link href={`/movie/${i.id}`}>
                <motion.a
                  className="home-section-card"
                  whileHover={{
                    scale: 1.1,
                  }}
                  href={`/movie/${res}`}
                >
                  <motion.div
                 
                  >
                   
                    <img
                      src={`https://image.tmdb.org/t/p/w300/${i.poster_path}`}
                    />
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
    */}
    </>
  );
}
