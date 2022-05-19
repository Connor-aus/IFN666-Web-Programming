import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

export default function HistoryTable({ data }) {
  const [chartLoading, setChartLoading] = useState(true);
  //const [stockData, setStockData] = useState([]);
  const [dataUpdate, setDataUpdate] = useState();
  const [labels, setLabels] = useState();
  const [chartData, setChartData] = useState();

  // check for updated data then set rerender
  setTimeout(() => {
    setDataUpdate(data);
  }, 100);

  useEffect(() => {
    (async () => {
      try {
        let stockhistory = Object.entries(data["Time Series (Daily)"]).map(
          ([date, x]) => ({
            date,
            ...x,
          })
        );
        //setStockData(stockhistory);

        setLabels(await getLabels(stockhistory));
        setChartData(await getChartData(stockhistory, labels));

        setChartLoading(false);
      } catch {
        console.log(`History data still being fetched`);
      }
    })();
  }, [dataUpdate]);

  // const labels = data.map((stock) => stock.date).reverse();
  // const chartData = {
  //   labels: labels,
  //   datasets: [
  //     {
  //       type: `line`,
  //       label: `Open`,
  //       data: data.map((stock) => stock["1. open"]).reverse(),
  //       fill: true,
  //       pointRadius: 0,
  //     },
  //     {
  //       type: `line`,
  //       label: `High`,
  //       data: data.map((stock) => stock["2. high"]).reverse(),
  //       fill: true,
  //       pointRadius: 0,
  //     },
  //     {
  //       type: `line`,
  //       label: `Low`,
  //       data: data.map((stock) => stock["3. low"]).reverse(),
  //       fill: true,
  //       pointRadius: 0,
  //     },
  //     {
  //       type: `line`,
  //       label: `Close`,
  //       data: data.map((stock) => stock["4. close"]).reverse(),
  //       fill: true,
  //       pointRadius: 0,
  //     },
  //   ],
  // };

  if (chartLoading) {
    return <p>Loading...</p>; // wrong place?, use spinner
  }

  return (
    <div className="HistoryChart">
      <Line data={chartData} />
    </div>
  );
}

async function getLabels(data) {
  return data.map((stock) => stock.date).reverse();
}

async function getChartData(data, labels) {
  return {
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
}
