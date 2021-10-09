import React from "react";
import Categories from "/components/genre";
import { useRouter } from "next/router";
export default function genre() {
  const router = useRouter();
  const id = router.query.id;
  return (
    <>
      <h1>Genre {id}</h1>
    </>
  );
}
