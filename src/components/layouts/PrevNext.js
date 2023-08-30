import React from "react";

export const Next = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", background: "#FC6A03", padding: "1.2rem" }}
      onClick={onClick}
    />
  );
}

export const Prev = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: "center", justifyContent: "center", background: "#FC6A03", padding: "1.2rem" }}
      onClick={onClick}
    />
    
  );
};
