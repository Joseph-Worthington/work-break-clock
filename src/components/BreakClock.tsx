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
    <div className="flex flex-col gap-5">
      <div id="clock-face" className="text-4xl bg-white text-slate-950 flex gap-5 flex-col py-9 px-12">
        <div id="session-length">{sessionTime}</div>
        <div id="break-length">{breakTime}</div>
      </div>
      <div id="timer-label">Session</div>
      <div id="session-number">{sessionNumber}</div>
      <div>
        <Button id="play" onClick={playClick} text="Play" />
        <Button id="pause" onClick={pauseClick} text="Pause" />
      </div>
    </div>
  );
};

export default BreakClock;