import React from "react";
import Button from "../Utilities/Button";

interface TimerInterfaceProps {
  breakLength: number;
  sessionLength: number;
  clickActions: Array<() => void>; 
}

const TimerInterface: React.FC<TimerInterfaceProps> = ({ breakLength, sessionLength, clickActions: [onBreakLengthDecrementClick, onBreakLengthIncrementClick, onSessionDecrementClick, onSessionIncrementClick] }) => {
  return (
    <div>
      <div id="break-label">Break Length</div>
      <div id="break-length">{breakLength}</div>
      <div id="session-label">Session Length</div>
      <div id="session-length">{sessionLength}</div>
      <Button id="break-increment" onClick={onBreakLengthIncrementClick} text="Break Increment" />
      <Button id="break-decrement" onClick={onBreakLengthDecrementClick} text="Break Decrement" />
      <Button id="session-increment" onClick={onSessionIncrementClick} text="Session Increment" />
      <Button id="session-decrement" onClick={onSessionDecrementClick} text="Session Decrement" />
    </div>
  );
};

export default TimerInterface;