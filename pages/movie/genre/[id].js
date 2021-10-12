import React from "react";
import Categories from "/components/genre";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Spin, Space } from "antd";
export default function genre() {
  const [genre, setGenre] = useState({
    data: [],
    loading: false,
  });
  const [basicInfo, setbasicInfo] = useState({});
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    setGenre({ ...genre, loading: true });
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&with_genres=${id}`
        )
        .then((res) => {
          setbasicInfo(res.data);
          setGenre({ ...genre, data: res.data.results, loading: false });
        });
    } catch (y) {
      setGenre({ ...genre, loading: false });

      console.log(y, "error in getting genre id ===>");
    }
  }, []);
  console.log(basicInfo, "basicinfo");
  return (
    <>
      <section className="genre-list">
        <h1>Genre {id}</h1>
        <div className="genre-list-container">
          {genre.loading ? (
            <Space size="middle">
              <Spin size="large" />
            </Space>
          ) : (
            <>
              {genre.data.map((i) => {
                return (
                  <div key={Math.random()} className="genre-list-card">
                    <img
                      className="genre-list-img"
                      src={`https://image.tmdb.org/t/p/w300/${i.poster_path}`}
                    />
                    <span className="genre-list-title">{i.original_title}</span>
                  </div>
                );
              })}
            </>
          )}
        </div>

        <Pagination
          defaultCurrent={basicInfo.page}
          total={basicInfo?.total_pages}
        />
      </section>
    </>
  );
}
