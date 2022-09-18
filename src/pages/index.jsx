import React from "react";
import Mountain from "../components/Mountain/Mountain.jsx/components/Mountain/Mountain";

import "../styles/main.css";
import "../styles/phone.css";

export default function IndexPage() {
  return (
    <div className="page">
        <div class="phone">
          <div class="background">
            <div class="mountains">
              <Mountain className="mountain1"/>
              <Mountain className="mountain2"/>
              <Mountain className="mountain3"/>
            </div>
          </div>
        </div>
    </div>
  );
}
