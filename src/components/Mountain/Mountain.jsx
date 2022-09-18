import React from "react";
import {Rabbit} from "../Rabbit/Rabbit";
import "./Mountain.css";

export default function Mountain({ className, children }) {
  return (
    <div class={`mountain mountain--shadow ${className}`}>
      <div className="grass"></div>
      <div className="zigzag"></div>
    {children}
    </div>
  );
}
