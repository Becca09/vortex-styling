import React from "react";
import { useState } from "react";

const Dropdown = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const {
    options,
    onchange,
    defaultOption,
    styling,
    label,
    id,
    labelClassName,
  } = props;

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <select
        id={id}
        className={styling}
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value);
          onchange(e.target.value);
        }}
      >
        <option>{defaultOption}</option>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>     
    </div>
  );
};

export default Dropdown;
