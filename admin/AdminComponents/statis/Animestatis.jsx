import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { api } from "../../../src/hooks/axios";

function AnimeChart() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function getAnime() {
      try {
        const { data } = await api.get("/animes");
        setCount(data.length);
      } catch (err) {
        console.log(err);
      }
    }

    getAnime();
  }, []);

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["Animes"],
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#7C3AED"],
  };

  const series = [
    {
      name: "Anime Count",
      data: [count],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      height={350}
      width="100%"
    />
  );
}

export default AnimeChart;