import React from 'react';
import BreakClock from './components/BreakClock';
import './App.css';

const App = () => {

  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);
  


  return (
    <div className="App">
      <div id="break-label">Break Length</div>
      <div id="session-label">Session Length</div>
      <div id="timer-label">Session</div>
      <BreakClock sessionTime={sessionLength} breakTime={breakLength} />
      <div id="start_stop">Start/Stop</div>
      <div id="reset">Reset</div>
      <div id="break-decrement">Break Decrement</div>
      
      <div id="break-increment">Break Increment</div>
      <div id="session-decrement">Session Decrement</div>
      <div id="session-increment">Session Increment</div>
      <div id="break-length">5</div>
      <div id="session-length">25</div>
    </div>
  );
}

export default App;
