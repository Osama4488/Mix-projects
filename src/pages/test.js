import React, { useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic";
export default function test() {
  const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
  const [state, setState] = useState({
    options: {
      //   label: ["a", "b", "c"],
    },
    series: [1, 1, 1, 1, 1],
  });
  const [originalData, setoriginalData] = useState({
    series: [
      [1, 2, 3, 4, 5],
      [7, 7, 7, 7, 7],
      [8, 8, 8, 8, 8],
      [1, 2, 3, 4, 5],
      [7, 7, 7, 7, 7],
    ],
    options: {
      label: ["a", "b", "c"],
    },
  });

  const testArr = [1, 1, 1, 1, 1];
  //   console.log(testArr.reduce(), "testArr.reduce();");
  const data = [
    { title: "One", prix: 100 },
    { title: "Two", prix: 200 },
    { title: "Three", prix: 300 },
  ];

  //   let numbers = [1, 2, 3];
  //   let sum = numbers.reduce(function (previousValue, currentValue) {
  //     return previousValue + currentValue;
  //   });

  //   console.log(sum);
  //   const sum = data.map((datum) => datum.prix).reduce((a, b) => a + b);

  //   console.log(sum, "sum"); // 600
  const arr = [];
  let summmm;
  originalData.series.map((i) =>
    arr.push(
      (summmm = i.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
      }))
    )
  );
  //   console.log(summmm, "summmm");
  const [filteredArray, setfilteredArray] = useState(arr);

  console.log(filteredArray, "filteredArray");

  useEffect(() => {
    // setfilteredArray([...filteredArray, arr]);

    console.log(originalData.series, "originalData series");
  }, [originalData]);

  return (
    <div>
      <Chart
        series={filteredArray}
        options={state.options}
        type="donut"
        width={"300px"}
        height={"300px"}
      ></Chart>
    </div>
  );
}
