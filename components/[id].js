import { useRouter } from "next/router";
import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { Pagination } from "antd";
import { useMainContext } from "./genre";
export default function Id() {
  const Context = useContext(useMainContext);
  
  const router = useRouter();
  const { id } = router.query;
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
  const result = data.filter((p) => p.title === id);
 
  return (
    <>
      {/* <Context.Consumer>
    {
      return(

        )
    }
    </Context.Consumer> */}
      <h1> Hello {id}</h1>{" "}
      {/* (
      <Pagination defaultCurrent={1} total={50} /> */}
      {/* {contextData.map((i) => {
        return (
          <>
            <h1>{i.id}</h1>
          </>
        );
      })} */}
    </>
  );
}
