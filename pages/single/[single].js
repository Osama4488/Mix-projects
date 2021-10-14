import React from "react";
import { useRouter } from "next/router";
export default function Single() {
  const router = useRouter();
  const id = router.query.single;

  return (
    <>
      <h1>osama</h1>
      <div>{id}</div>
    </>
  );
}
