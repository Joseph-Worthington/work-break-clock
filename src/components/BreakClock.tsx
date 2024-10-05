import React from "react";

interface BreakClockProps {
  breakTime: number;
  sessionTime: number;
  sessionNumber: number;
}


const BreakClock: React.FC<BreakClockProps> = ({ breakTime, sessionTime }) => {
  return (
    <div>
      <div id="break-label">Break Length</div>
      <div id="break-length">{breakTime}</div>
      <div id="session-label">Session Length</div>
      <div id="session-length">{sessionTime}</div>
      <div id="timer-label">Session</div>
      <div id="session-number">{sessionTime}</div>
    </div>
  );
};

export default BreakClock;