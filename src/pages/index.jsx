import React from "react";
import Cloud from "../components/Cloud/Cloud";
import Mountain from "../components/Mountain/Mountain";
import { Rabbit } from "../components/Rabbit/Rabbit";

import "../styles/main.css";
import "../styles/phone.css";

export default function IndexPage() {
  return (
    <div className="page">
      <div class="phone">
        <div class="background">
          <div class="mountains">
            <Cloud className="cloud-1"/>
            <Mountain className="mountain1">
              <Rabbit className="rabbit--movement"/>
            </Mountain>
            <Mountain className="mountain2" />
            <Mountain className="mountain3" />
          </div>
        </div>
      </div>
    </div>
  );
}
