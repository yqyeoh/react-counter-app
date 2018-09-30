import React from "react";
const formatCount = value => {
  let style = `badge badge-pill badge-`;
  return value === 0 ? (
    <span className={`${style}primary`}>Zero</span>
  ) : value > 0 ? (
    <span className={`${style}success`}>Positive</span>
  ) : (
    <span className={`${style}danger`}>Negative</span>
  );
};

const Label = ({ value, name }) => {
  return (
    <div className="center">
      <span class="badge badge-pill badge-info">{name}</span>
      <br/>
      <span>{formatCount(value)}</span>
    </div>
  );
};

export default Label;
