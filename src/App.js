import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="break-label">Break Length</div>
      <div id="session-label">Session Length</div>
      <div id="timer-label">Session</div>
      <div id="time-left">25:00</div>
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
