import React, { useState } from "react";
import GitLogo from "./gitlogo.jsx";

function App() {
  let TimeAndDate = new Date();
  let dates = TimeAndDate.toLocaleTimeString();
  let i = TimeAndDate.getDay();
  let Day = ["SUN", "MON", "TUES", "WED", "THUR", "FRI", "SAT"];
  // console.log(Day[i]);

  const [timing, setTiming] = useState(dates);
  setInterval(() => {
    dates = new Date().toLocaleTimeString();
    setTiming(dates);
  }, 1000);
  return (
    <div className="container">
      <a
        className="rotateBtn"
        href="https://github.com/ShubhamJoshii?tab=repositories"
        target="_blank"
      >
        <GitLogo />
      </a>

      <div className="InnerCont">
        <h1>
          {Day[i]} {timing}
        </h1>
        <div className="lowerText">
          <p>DAY | HOURS | MINUTES | SECONDS</p>
          {/* <p>HOURS</p>
                <p>MIN</p>
                <p>SECONDS </p> */}
        </div>
      </div>
    </div>
  );
}

export default App;
