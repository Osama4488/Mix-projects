import axios from "axios";
import { useState, useEffect } from "react";

export default function Movie() {
  const [data, setData] = useState([]);
  const [filtered, setfiltered] = useState([]);
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
  const typeSearch = (e) => {
    console.log(data);
    if (e === "total") {
      setfiltered(data);
    } else {
      let find = data.filter(
        (item) => Math.round(item.vote_average).toString() === e
      );
      console.log(find, "round");
      if (find) {
        setfiltered(find);
      } else {
      }
    }
  };
  const searchKeyword = (e) => {
    let find = data.filter((item) =>
      item.title.toLowerCase().includes(e.toLowerCase())
    );
    if (find) {
      setfiltered(find);
    } else {
      setfiltered(data);
    }
  };
  return (
    <section className="movie-section">
      <input
        type="text"
        className="search"
        onChange={(e) => searchKeyword(e.target.value)}
        placeholder="Search"
      />
      <div className="flex-container" style={{ marginBottom: "30px" }}>
        <div onClick={(e) => typeSearch("total")} className="movie-card">
          <div>Total </div> <div> {data.length} </div>
        </div>
        <div onClick={(e) => typeSearch("5")} className="movie-card">
          <div>5 rating</div> <div> length </div>
        </div>
        <div onClick={(e) => typeSearch("7")} className="movie-card">
          <div>7 rating </div> <div> length </div>
        </div>
        <div onClick={(e) => typeSearch("8")} className="movie-card">
          <div> 8 rating</div> <div> length </div>
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
