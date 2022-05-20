import { useState, useEffect } from "react";

export function StartDateSetter(props) {
  const [startDate, setStartDate] = useState("");
  const [dataUpdate, setDataUpdate] = useState(0);

  // for intermitant refreshing
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setDataUpdate(dataUpdate + 1);
      }, 100);
    })();
  }, [dataUpdate]);

  return (
    <div>
      <input
        aria-label="..."
        type="date"
        size="35px"
        value={startDate}
        onChange={(e) => {
          setStartDate(e.target.value);
          props.onChange(e.target.value);
        }}
      />
      <p>Start Date: {startDate}</p>
    </div>
  );
}

export function EndDateSetter(props) {
  const [endDate, setEndDate] = useState("");
  const [dataUpdate, setDataUpdate] = useState(0);

  // for intermitant refreshing
  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setDataUpdate(dataUpdate + 1);
      }, 100);
    })();
  }, [dataUpdate]);

  return (
    <div>
      <input
        aria-label="..."
        type="date"
        size="35px"
        value={endDate}
        onChange={(e) => {
          setEndDate(e.target.value);
          props.onChange(e.target.value);
        }}
      />
      <p>End Date: {endDate}</p>
    </div>
  );
}

export function dateFilter(start, end, rawData) {
  let temp = [];
  let startInt = parseInt(start.replaceAll("-", ""));
  let endInt = parseInt(end.replaceAll("-", ""));

  rawData.map((row) => {
    let rowInt = parseInt(row.date.replaceAll("-", ""));
    if (startInt <= rowInt && rowInt <= endInt) temp.push(row);
  });
  return temp;
}
