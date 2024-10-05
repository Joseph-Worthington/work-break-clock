import React from "react";
import Button from "../Utilities/Button";

interface BreakClockProps {
  breakTime: string;
  sessionTime: string;
  sessionNumber: number;
  clickActions: Array<() => void>; 
}


const BreakClock: React.FC<BreakClockProps> = ({ breakTime, sessionTime, clickActions: [pauseClick, playClick ], sessionNumber }) => {
  return (
    <div>
      <div id="break-length">{breakTime}</div>
      <div id="session-length">{sessionTime}</div>
      <div id="timer-label">Session</div>
      <div id="session-number">{sessionNumber}</div>
      <Button id="play" onClick={playClick} text="play" />
      <Button id="pause" onClick={pauseClick} text="pause" />
    </div>
  );
};

export default BreakClock;