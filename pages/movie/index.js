import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "./components/hero/hero.js";
import Second from "./components/second.js";
import Head from "next/head";
export default function Movie() {
  // const [data, setData] = useState([]);
  // const [filtered, setfiltered] = useState([]);
  // const [lengths, setLengths] = useState([]);
  // const [rating, setRating] = useState(false);
  // const [input, setinput] = useState("");
  // const [clickString, setclickString] = useState("total");
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&query=star+wars`
  //     )
  //     .then((res) => {
  //       setData(res.data.results);
  //       setfiltered(res.data.results);
  //     });
  // }, []);

  return (
    <>
      <Head>
        <title>OsamaFlix</title>
        <meta name="description" content="Osama's Movie App" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div style={{ backgroundColor: "#000" }}>
        <Hero />
        <Second />
      </div>
    </>
  );
}
