import React from "react";
import Button from "../Utilities/Button";

interface TimerInterfaceProps {
  breakLength: number;
  sessionLength: number;
  clickActions: Array<() => void>; 
}

const TimerInterface: React.FC<TimerInterfaceProps> = ({ breakLength, sessionLength, clickActions: [onBreakLengthDecrementClick, onBreakLengthIncrementClick, onSessionDecrementClick, onSessionIncrementClick] }) => {
  return (
    <div className="flex gap-5">
      <div id="break-interface" className="flex flex-col gap-4">
        <div id="break-label">Break Length</div>
        <div id="break-length">{breakLength}</div>
        <div className="flex gap-2">
          <Button id="break-increment" onClick={onBreakLengthIncrementClick} text="Break Increment" />
          <Button id="break-decrement" onClick={onBreakLengthDecrementClick} text="Break Decrement" />
        </div>

      </div>
      <div id="session-interface" className="flex flex-col gap-4">
        <div id="session-label">Session Length</div>
        <div id="session-length">{sessionLength}</div>
        <div className="flex gap-2">
          <Button id="session-increment" onClick={onSessionIncrementClick} text="Session Increment" />
          <Button id="session-decrement" onClick={onSessionDecrementClick} text="Session Decrement" />
        </div>
      </div>
    </div>
  );
};

export default TimerInterface;