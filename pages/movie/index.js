import axios from "axios";
import { useState, useEffect } from "react";

export default function Movie() {
  const [data, setData] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [lengths, setLengths] = useState([]);
  const [rating, setRating] = useState(false);
  const [input, setinput] = useState("");
  const [clickString, setclickString] = useState("total");
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&query=star+wars`
      )
      .then((res) => {
        setData(res.data.results);
        setfiltered(res.data.results);
      });
  }, []);

  // useEffect(() => {
  //   const arr = [...new Set(data.filter((e) => Math.round(e.vote_average)))];
  //   console.log(arr, "unique");
  // }, []);
  // {
  //   data.map((i) => {
  //     setLengths({
  //       rating:data.filter(
  //         (item) => Math.round(item.vote_average).toString() === i.count
  //     })
  //   });
  // }
  let find = data.filter(
    (item) => Math.round(item.vote_average).toString() === "5"
  );
  let find1 = data.filter(
    (item) => Math.round(item.vote_average).toString() === "7"
  );
  let find2 = data.filter(
    (item) => Math.round(item.vote_average).toString() === "8"
  );
  useEffect(() => {
    const obj = { rating: "5", count: find.length.toString() };
    const obj1 = { rating: "7", count: find1.length.toString() };
    const obj2 = { rating: "8", count: find2.length.toString() };
    const arr = [obj, obj1, obj2];
    setLengths(arr);
  }, [find.length]);

  // console.log(lengths, "lengths");
  const typeSearch = (e) => {
    setclickString(e);
    setRating(true);

    if (e === "total") {
      setfiltered(data);
      setRating(false);
    } else {
      let find = data.filter(
        (item) => Math.round(item.vote_average).toString() === e
      );

      if (find) {
        setfiltered(find);
      } else {
        console.log(find, "error");
      }
    }
  };
  const searchKeyword = (e) => {
    if (e === "") {
      alert("osama");
      setRating(false);
      setfiltered(filtered);
    } else {
      if (rating) {
        let find = filtered.filter((item) =>
          item.title.toLowerCase().includes(e.toLowerCase())
        );
        if (find) {
          // alert("osama");
          setfiltered(find);
          console.log(find, "filtered data");
        } else {
          setfiltered(data);
        }
      } else {
        let find = data.filter((item) =>
          item.title.toLowerCase().includes(e.toLowerCase())
        );
        if (find) {
          setfiltered(find);
        } else {
          setfiltered(data);
        }
      }
    }
  };
  // {
  //   console.log(filtered, "filtered data");
  // }
  return (
    <section className="movie-section">
      <input
        type="text"
        className="search"
        onChange={(e) => searchKeyword(e.target.value)}
        // value={input}
        placeholder="Search"
      />

      {/* <h1>{lengths.count} </h1> */}
      <div className="flex-container" style={{ marginBottom: "30px" }}>
        <div
          onClick={(e) => typeSearch("total")}
          className={`movie-card ${
            clickString === "total" ? "movie-card--active" : ""
          }`}
        >
          <div>Total </div> <div> {data.length} </div>
        </div>
        <div
          onClick={(e) => typeSearch("5")}
          className={`movie-card ${
            clickString === "5" ? "movie-card--active" : ""
          }`}
        >
          <div>5 rating</div> <div> {lengths[0]?.count} </div>
        </div>
        <div
          onClick={(e) => typeSearch("7")}
          className={`movie-card ${
            clickString === "7" ? "movie-card--active" : ""
          }`}
        >
          <div>7 rating </div> <div> {lengths[1]?.count} </div>
        </div>
        <div
          onClick={(e) => typeSearch("8")}
          className={`movie-card ${
            clickString === "8" ? "movie-card--active" : ""
          }`}
        >
          <div> 8 rating</div> <div> {lengths[2]?.count} </div>
        </div>
      </div>
      <div className="flex-container">
        {filtered.map((i) => {
          return (
            <div key={Math.random()} className="movie-card">
              <div>{i.title}</div>
              <div>{i.vote_average}</div>
              <div>{i.overview} </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
