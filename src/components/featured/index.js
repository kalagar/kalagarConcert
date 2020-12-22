import React from "react";
import Carrousel from "./Carrousel";
import Countdown from "./Countdown";

function Featured() {
  return (
    <div style={{ position: "relative" }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">محسن چاووشی</div>
      </div>
      <Countdown />
    </div>
  );
}

export default Featured;
