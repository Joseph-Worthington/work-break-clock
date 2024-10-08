import React from "react";
import Button from "../Utilities/Button";

interface BreakClockProps {
  sessionTime: string;
  sessionNumber: number;
  sessionMessage: string;
  clickActions: Array<() => void>; 
}


const BreakClock: React.FC<BreakClockProps> = ({ sessionTime, clickActions: [ playClick, resetClick ], sessionNumber, sessionMessage }) => {
  return (
    <div className="flex flex-col gap-5">
      <div id="clock-face" className="text-4xl bg-white text-slate-950 flex gap-5 flex-col py-9 px-12">
        <div id="timer-label">{sessionMessage}</div>
        <div id="time-left">{sessionTime}</div>
      </div>
        <div id="session-number">{sessionNumber}</div>
      <div>
        <Button id="start_stop" onClick={playClick} text="Play/Pause" />
        <Button id="reset" onClick={resetClick} text="Reset" />
      </div>
    </div>
  );
};

export default BreakClock;