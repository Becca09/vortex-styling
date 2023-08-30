import React from "react";
import { useState } from "react";

const Input = (props) => {
  const [value, setValue] = useState("");

  const { placeholder, onChange, styling, type, label, id, labelClassName } =
    props;

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <input
        className={`${styling} cursor-text`}
        id={id}
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
