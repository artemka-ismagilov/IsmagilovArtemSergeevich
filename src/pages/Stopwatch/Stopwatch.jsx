import React, { useState, useEffect } from "react";
import Watch from "./Watch";
import Controls from "./Controls";
function StopWatch() {
  const [active, setActive] = useState(false);
  const [pause, setPause] = useState(true);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    let timePeriod = null;
    if (active && pause === false) {
      timePeriod = setInterval(() => {
        setDuration((duration) => duration + 10);
      }, 10);
    } else {
      clearInterval(timePeriod);
    }
    return () => {
      clearInterval(timePeriod);
    };
  }, [active, pause]);
  const initWatch = () => {
    setActive(true);
    setPause(false);
  };
  const initResume = () => {
    setPause(!pause);
  };
  const initReset = () => {
    setActive(false);
    setDuration(0);
  };
  return (
    <div className="stop-watch">
      <Watch time={duration} />
      <Controls
        initWatch={initWatch}
        initResume={initResume}
        initReset={initReset}
        active={active}
        pause={pause}
      />
    </div>
  );
}
export default StopWatch;
