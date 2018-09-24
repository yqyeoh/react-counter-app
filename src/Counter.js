import React from "react";
import Button from "./Button";

const Counter = ({ value, add, minus }) => {
  return (
    <div>
      <h1 className="big">{value}</h1>
      <Button classType="primary" handleClick={add}>
        +
      </Button>
      <Button classType="danger" handleClick={minus}>
        -
      </Button>
    </div>
  );
};

export default Counter;
