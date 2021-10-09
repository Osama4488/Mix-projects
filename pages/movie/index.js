import axios from "axios";
import { useState, useEffect } from "react";
import Hero from "/components/hero/hero.js";
import Second from "/components/second.js";
import Head from "next/head";

export default function Movie() {
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
