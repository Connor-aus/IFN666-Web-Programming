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
        placeholder={selectedValue}
      />
    </div>
  );
}
