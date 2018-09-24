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

const Label = ({ value }) => {
  return <div className="center m-2">{formatCount(value)}</div>;
};

export default Label;
