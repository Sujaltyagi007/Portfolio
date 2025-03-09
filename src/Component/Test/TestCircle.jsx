import React, { useState } from "react";
import CircleProgress from "../AboutBtn/CircleProgress";

const TestCircle = () => {
  const [currentvalue, setcurrentvalue] = useState(35);
  return (
    <div className="">
      <CircleProgress currentvalue={currentvalue} circlewidth={200} />
      <input
        type="range"
        min={1}
        max={100}
        step={1}
        value={currentvalue}
        onChange={(ev) => setcurrentvalue(ev.target.value)}
      />
    </div>
  );
};

export default TestCircle;
