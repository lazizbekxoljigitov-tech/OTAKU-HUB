import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { api } from "../../../src/hooks/axios";

function GenreChart() {
  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    async function getGenres() {
      try {
        const { data } = await api.get("/animes");

        const genres = {};

        data.forEach((anime) => {
          anime.genre.forEach((genre) => {
            genres[genre] = (genres[genre] || 0) + 1;
          });
        });

        setLabels(Object.keys(genres));
        setSeries(Object.values(genres));
      } catch (err) {
        console.log(err);
      }
    }

    getGenres();
  }, []);

  const options = {
    chart: {
      type: "donut",
      toolbar: {
        show: false,
      },
    },
    labels,
    legend: {
      position: "bottom",
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      height={350}
    />
  );
}

export default GenreChart;