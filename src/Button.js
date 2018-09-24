import React from 'react';

const Button = ({classType, handleClick, children}) => {
  return (
    <button className={`btn btn-${classType} btn-lg m-2`} type="submit" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
