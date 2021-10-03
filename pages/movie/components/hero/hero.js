import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
// import Query from "./query.js";
export default function Hero() {
  const [keyword, setKeyword] = useState("");
  const [data, setData] = useState([]);
  const [passData, setpassData] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    let inputKeyword = e.target.elements.search.value;
    setKeyword(inputKeyword);
    fetchData(inputKeyword);
    setpassData(true);
  };
  const fetchData = (e) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&query=${e}`
        // `https://api.themoviedb.org/3/search/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&query=star`
      )
      .then((res) => {
        setData(res.data.results);
      });
  };

  // console.log(data, "results");
  // console.log(keyword, "keyword");

  return (
    <section className="home-section">
      <div className="home-section-flex-top">
        <img className="home-section-logo-img" src="/images/netflix-logo.jpg" />
        <button className="home-section-btn">Sign In</button>
      </div>
      <div className="home-section-flex-bottom">
        <h2 className="home-section-heading">
          Unlimited movies, TV shows, and more.
        </h2>
        <h3 className="home-section-subheading">
          Watch anywhere. Cancel anytime.
        </h3>
      </div>
      <form onSubmit={(e) => onSubmit(e)} className="home-section-form">
        <input
          className="home-section-input"
          placeholder="Enter movies to search..."
          type="text"
          name="search"
        />
        {/* <Link
                  to={{
                    pathname: `/blog/${i?.id}`,
                    query: {
                      name: "aaaa",
                    },
                  }}
        
        > */}
        <Link href="/movie/components/hero/query">
          <button type="submit" className="home-section-search">
            Search
          </button>
        </Link>
      </form>
      {/* {passData && (
        <>
          alert(passData)
          <Query data={data} />
        </>
      )} */}
    </section>
  );
}
