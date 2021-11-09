import React from "react";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Pagination, Spin, Space } from "antd";
import Link from "next/link";

export default function Genre({genre, loading}) {
  // const [genre, setGenre] = useState({
  //   data: [],
  //   loading: false,
  // });
  const [basicInfo, setbasicInfo] = useState({});
  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    // setGenre({ ...genre, loading: true });
    // if (id) {
    //   try {
    //     axios
    //       .get(
    //         `https://api.themoviedb.org/3/discover/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&with_genres=${id}`
    //       )
    //       .then((res) => {
    //         setbasicInfo(res.data);
    //         setGenre({ ...genre, data: res.data.results, loading: false });
    //         console.log(genre, "then");
    //         console.log(id, "id");
    //       });
    //   } catch (y) {
    //     setGenre({ ...genre, loading: false });
    //     console.log(y, "error in getting genre id ===>");
    //   }
    // }
  }, [id]);
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
              {genre.map((i) => {
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

        <Pagination
          defaultCurrent={basicInfo.page}
          total={basicInfo?.total_pages}
        />
      </section>
    </>
  );
}



export async function getServerSideProps(context) {

  const {data} = await axios
  .get(
    `https://api.themoviedb.org/3/discover/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&with_genres=${context.params.id}`
  )



  return {
    props: {genre:data.results, loading : false},
  }
}