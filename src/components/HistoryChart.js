import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function HistoryChart({ data }) {
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
