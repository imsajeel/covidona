import React, { useState, useEffect } from "react";
import { fetchDailyDate } from "../../api";
import { Line } from "react-chartjs-2";

export default function Chart() {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyDate());
    };

    fetchAPI();
  });

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "blue",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "pink",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return (
    <div>
      <div className="card chart">
        <b>Global Chart</b>
        <br />
        <br />
        {lineChart}
      </div>
    </div>
  );
}
