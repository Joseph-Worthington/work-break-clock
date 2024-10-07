import React, {useEffect, useState} from 'react';
import BreakClock from './components/BreakClock';
import TimerInterface from './components/TimerInterface';
import Button from './Utilities/Button';
import './App.css';

const App = () => {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [sessionTime, setSessionTime] = useState(sessionLength * 60); // in seconds
  const [breakTime, setBreakTime] = useState(breakLength * 60); // in seconds
  const [sessionNumber, setSessionNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sessionMessage, setSessionMessage] = useState('Session');

  const onSessionIncrementClick = () => {
    if(sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setSessionTime((sessionLength + 1) * 60);
    }
  }

  const onSessionDecrementClick = () => {
    if (sessionLength > 1) {
      setSessionLength(sessionLength - 1);
      setSessionTime((sessionLength - 1) * 60);
    }
  };

  const onBreakLengthIncrementClick = () => {
    if (breakLength < 60) {
      setBreakLength(breakLength + 1);
      setBreakTime((breakLength + 1) * 60);
    }
  };

  const onBreakLengthDecrementClick = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
      setBreakTime((breakLength - 1) * 60);
    }
  };

  
  const playClick = () => {
    if(!isPlaying && sessionLength > 0) {
      setSessionMessage('Work time');
      setIsPlaying(true);
    }
    if(isPlaying && sessionLength > 0){
      setSessionMessage('On Pause');
      setIsPlaying(false);

    }
  }

  const resetClick = () => {
    console.log('reset');
    setIsPlaying(false);
    setSessionLength(25);
    setBreakLength(5);
    setSessionTime(25 * 60);
    setBreakTime(5 * 60);
    setSessionNumber(0);
    setSessionMessage('Work time');
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        const sessionTimeLeft = document.getElementById('time-left').innerHTML;
        const breakTimeLeft = document.getElementById('break-left').innerHTML;
        if ( !sessionTimeLeft.includes('00:00') ) {
          setSessionTime(prev => prev - 1);
        } else if ( !breakTimeLeft.includes('00:00') ) {
          setSessionMessage('Break time');
          setBreakTime(prev => prev - 1);
        } else {
          setSessionNumber(prev => prev + 1);
          setIsPlaying(false);
          setSessionTime(sessionLength * 60);
          setBreakTime(breakLength * 60);
          setIsPlaying(true);
          setSessionMessage('Work time');
        }
      }, 1000); // Update every second
    }

    return () => clearInterval(timer); // Cleanup on unmount or when dependencies change
  }, [isPlaying, sessionLength, breakLength, sessionNumber]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  


  return (
    <div className="App flex justify-center items-center bg-slate-900 text-white h-screen flex-col text-lg">
      <BreakClock 
        sessionTime={formatTime(sessionTime)} 
        breakTime={formatTime(breakTime)} 
        sessionNumber={sessionNumber} 
        clickActions={[playClick, resetClick ]}
        sessionMessage={sessionMessage}
      />
      <TimerInterface 
        sessionLength={sessionLength} 
        breakLength={breakLength} 
        clickActions={[onBreakLengthDecrementClick, onBreakLengthIncrementClick, onSessionDecrementClick, onSessionIncrementClick ]} 
      />
    </div>
  );
}

export default App;
