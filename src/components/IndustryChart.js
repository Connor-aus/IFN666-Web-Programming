import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function IndustryChart({ data }) {
  // console.log(data[0].date);
  // console.log(data[0]["1. open"]);
  // console.log(data[0]["2. high"]);
  // console.log(data[0]["3. low"]);
  // console.log(data[0]["4. close"]);
  let elementArray = [
    "industry",
    "Real-Time Performance",
    "1 Day Performance",
    "5 Day Performance",
    "1 Month Performance",
    "3 Month Performance",
    "Year-to-Date (YTD) Performance",
    "1 Year Performance",
    "3 Year Performance",
    "5 Year Performance",
    "10 Year Performance",
  ];

  const labels = data.map((stock) => stock.title).reverse();
  const chartData = {
    labels: labels,
    datasets: [
      {
        type: `line`,
        label: `High`,
        data: data.map((stock) => stock["1 Day Performance"]).reverse(),
        fill: true,
        pointRadius: 0,
      },
      {
        type: `line`,
        label: `Low`,
        data: data.map((stock) => stock["5 Day Performance"]).reverse(),
        fill: true,
        pointRadius: 0,
      },
      {
        type: `line`,
        label: `Close`,
        data: data.map((stock) => stock["1 Month Performance"]).reverse(),
        fill: true,
        pointRadius: 0,
      },
    ],
  };
  return (
    <div>
      <Line data={chartData} />
    </div>
  );
}
