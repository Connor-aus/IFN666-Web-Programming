import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Container, Row, Col } from "reactstrap";

export default function HistoryTable({ data }) {
  const [chartLoading, setChartLoading] = useState(true);
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

        setLabels(await getLabels(stockhistory));
        setChartData(await getChartData(stockhistory, labels));
        setChartLoading(false);
      } catch {
        console.log(`History data still being fetched`);
      }
    })();
  }, [dataUpdate]);

  const options = {
    responsive: true,
    color: "black",
    borderColor: "black",
    borderWidth: 1,
    pointRadius: 0,
    text: "Stock Performance",
    scales: {
      y: {
        ticks: {
          callback: function (value, index, ticks) {
            return "$" + value;
          },
        },
        title: {
          text: "Stock Price",
        },
      },
      x: {
        text: "Dates",
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Price History",
      },
    },
  };

  if (chartLoading) {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col sm="auto" id="skinny">
            <p>Loading Chart...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container style={{ marginBottom: "80px" }}>
      <div className="HistoryChart">
        <Line data={chartData} options={options} />
      </div>
    </Container>
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
        borderColor: "orange",
      },
      {
        type: `line`,
        label: `High`,
        data: data.map((stock) => stock["2. high"]).reverse(),
        fill: true,
        borderColor: "green",
      },
      {
        type: `line`,
        label: `Low`,
        data: data.map((stock) => stock["3. low"]).reverse(),
        fill: true,
        borderColor: "red",
        backgroundColor: "LightCyan",
      },
      {
        type: `line`,
        label: `Close`,
        data: data.map((stock) => stock["4. close"]).reverse(),
        fill: true,
        borderColor: "blue",
      },
    ],
  };
}
