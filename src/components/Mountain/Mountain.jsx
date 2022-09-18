import React from "react";
import './Mountain.css';

export default function Mountain({className}) {
  return (
    <div class={`mountain mountain--shadow ${className}`}>
      <div className="grass"></div>
      <div className="zigzag"></div>
    </div>
  );
}
