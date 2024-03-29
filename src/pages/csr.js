
import { useEffect,useState } from "react";
import { Pagination, Spin, Space } from "antd";
import axios from "axios";
import React from "react";
import Link from "next/link";
export default function CSR(){
  
   const [genre, setGenre] = useState({
    data: [],
    loading: false,
  });
  useEffect(() => {
    setGenre({ ...genre, loading: true });
    try {
          axios
            .get(
              `https://api.themoviedb.org/3/discover/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&with_genres=35`
            )
            .then(({data}) =>  setGenre({ ...genre, data:data.results , loading: false }) );
        } catch (y) {
          setGenre({ ...genre, loading: false });
          console.log(y, "error in getting genre id ===>");
        }
  }, []);
 
    return(
        <>
        <section className="genre-list">
        
        <div className="genre-list-container">
          {genre.loading ? (
            <Space size="middle">
              <Spin size="large" />
            </Space>
          ) : (
            <>
              {genre.data.map((i) => {
                return (
                  <Link
                    key={Math.random()}
                    href={`/single/` + i?.id}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div key={Math.random()} className="genre-list-card">
                      <img
                        className="genre-list-img"
                        src={`https://image.tmdb.org/t/p/w300/${i.poster_path}`}
                      />
                      <span className="genre-list-title">
                        {i.original_title}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </>
          )}
        </div>

      </section>

        </>
    )
}

