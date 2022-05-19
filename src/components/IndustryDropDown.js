import { useState } from "react";
import Select from "react-select";

export function IndustryDropDown(props) {
  const [selectedValue, setSelectedValue] = useState("All");

  const options = [
    { value: "All", label: "All" },
    { value: "Technology", label: "Technology" },
    { value: "Consumer Defensive", label: "Consumer Defensive" },
    { value: "Industrials", label: "Industrials" },
    { value: "Communication Services", label: "Communication Services" },
    { value: "Healthcare", label: "Healthcare" },
    { value: "Utilities", label: "Utilities" },
    { value: "Financial Services", label: "Financial Services" },
    { value: "Consumer Cyclic", label: "Consumer Cyclic" },
  ];

  return (
    <div>
      <Select
        options={options}
        onChange={(e) => {
          setSelectedValue(e.value);
          props.onChange(e.value);
        }}
        defaultValue={selectedValue}
        value={selectedValue}
        placeholder="Select an industry"
      />
    </div>
  );
}

export async function filterIndustryData(rowData, industrySelection) {
  if (industrySelection == "All") return rowData;
  return rowData.filter((row) => {
    return row.industry.indexOf(industrySelection) > -1;
  });
}

// var a = [1, 1, 2];

// setIndustries = [... new Set(rowData.industry)]
