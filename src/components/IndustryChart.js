import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function IndustryChart({ data }) {
  // console.log(data[0].date);
  // console.log(data[0]["1. open"]);
  // console.log(data[0]["2. high"]);
  // console.log(data[0]["3. low"]);
  // console.log(data[0]["4. close"]);

  const labels = data.map((stock) => stock.date).reverse();
  const chartData = {
    labels: labels,
    datasets: [
      {
        type: `line`,
        label: `Open`,
        data: data.map((stock) => stock["1. open"]).reverse(),
        fill: true,
        pointRadius: 0,
      },
      {
        type: `line`,
        label: `High`,
        data: data.map((stock) => stock["2. high"]).reverse(),
        fill: true,
        pointRadius: 0,
      },
      {
        type: `line`,
        label: `Low`,
        data: data.map((stock) => stock["3. low"]).reverse(),
        fill: true,
        pointRadius: 0,
      },
      {
        type: `line`,
        label: `Close`,
        data: data.map((stock) => stock["4. close"]).reverse(),
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
