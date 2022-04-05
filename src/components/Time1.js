import React, { useEffect, useState } from "react";

const Time1 = () => {
  const [clockState, setClockState] = useState();
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        const date = new Date();
        setClockState(date.toLocaleTimeString());
      });
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div>
      <div className="counter-container">
        <div id="compteurtemps">
          <h2>TIME'S PYTHON</h2>
          <p>
            <span id="timeactu">{clockState}</span>
          </p>
          <div className="buttons">
            <div>
              {timerOn && (
                <button id="stop" onClick={() => setTimerOn(false)}>
                  Stop time
                </button>
              )}
            </div>
            <div>
              {!timerOn && (
                <button id="start" onClick={() => setTimerOn(true)}>
                  play time
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time1;
