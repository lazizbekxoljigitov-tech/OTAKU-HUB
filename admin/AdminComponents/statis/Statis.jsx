import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function UsersChart() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => {
        const chartData = data.map((item, index) => ({
          x: new Date(item.time).getTime(),
          y: index + 1,
        }));

        setSeries([
          {
            name: "Users",
            data: chartData,
          },
        ]);
      });
  }, []);

  const options = {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: "datetime",
    },
    stroke: {
      curve: "smooth",
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height={350}
      width="100%"
    />
  );
}

export default UsersChart;
