import React from "react";

const Card = (props) => {
  return (
    <div >
      <div>{props.description}</div>
      <div>
        <div>Price: {props.amount}</div>
        <div className="content">Date: {props.date.toLocaleDateString()}</div>
      </div>
    </div>
  );
};

export default Card;