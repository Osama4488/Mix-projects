import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Spin } from "antd";
// import { movieContext } from "../../context";
import router, { useRouter } from "next/router";

export default function Query() {
  // const ctx = movieContext();
  const router = useRouter();
  const [data, setData] = useState({
    loading: true,
    error: null,
    data: [],
  });

  const getData = async () => {
    if (!router.query?.str) return;

    try {
      setData({
        ...data,
        error: null,
      });

      const { data } = await axios.get(
        decodeURI(
          `https://api.themoviedb.org/3/search/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&query=${router.query.str}`
        )
      );

      setData({
        ...data,
        loading: false,
        error: null,
        data: data.results,
      });
    } catch (e) {
      setData({
        ...data,
        loading: false,
        error: e.message + " error <=== get data movies",
        data: [],
      });
      console.log(e, "error <=== get data movies");
    }
  };

  useEffect(() => {
    getData();
  }, [router.query?.str]);
 
  return (
    <div>
      {data.loading ? (
        <>Loading...</>
      ) : (
        data.data?.map((el) => {
          return <h1 key={Math.random()}>{el.original_title}</h1>;
        })
      )}
    </div>
  );
}
