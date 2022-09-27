import { useState, useEffect } from "react";
// eslint-disable-next-line
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function MetricChart(props) {
   const [data, setData] = useState({
      labels: [],
      datasets: [
         {
            label: "loading",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [],
         },
      ],
   });

   useEffect(() => {
      setData({
         labels: props.entries
            .map((entry) =>
               new Date(entry.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
               })
            )
            .reverse(),
         datasets: [
            {
               label: props.metric,
               backgroundColor: "rgb(255, 99, 132)",
               borderColor: "rgb(255, 99, 132)",
               data: props.entries.map((entry) => entry.value).reverse(),
            },
         ],
      });
   }, [props.entries, props.metric]);

   return (
      <div className="max-w-2xl py-4">
         <Line data={data} />
      </div>
   );
}
