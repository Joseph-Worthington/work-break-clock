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

  const onSessionIncrementClick = () => {
    if(sessionLength < 60) {
      setSessionLength(sessionLength + 1);
      setSessionTime((sessionLength + 1) * 60);
    }
  }

  const onSessionDecrementClick = () => {
    if (sessionLength > 15) {
      setSessionLength(sessionLength - 1);
      setSessionTime((sessionLength - 1) * 60);
    }
  };

  const onBreakLengthIncrementClick = () => {
    if (breakLength < 30) {
      setBreakLength(breakLength + 1);
      setBreakTime((breakLength + 1) * 60);
    }
  };

  const onBreakLengthDecrementClick = () => {
    if (breakLength > 5) {
      setBreakLength(breakLength - 1);
      setBreakTime((breakLength - 1) * 60);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        if (sessionTime > 0) {
          setSessionTime(prev => prev - 1);
        } else if (breakTime > 0) {
          setBreakTime(prev => prev - 1);
        } else {
          setSessionNumber(prev => prev + 1);
          setIsPlaying(false);
          setSessionTime(sessionLength * 60);
          setBreakTime(breakLength * 60);
        }
      }, 1000); // Update every second
    }

    return () => clearInterval(timer); // Cleanup on unmount or when dependencies change
  }, [isPlaying, sessionLength, breakLength, sessionNumber]);




  const playClick = () => {
      if(!isPlaying && sessionLength > 0) {
        setIsPlaying(true);
      }
  }

  const pauseClick = () => {
    if(isPlaying && sessionLength > 0){
      setIsPlaying(false);

    }
  }

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  


  return (
    <div className="App">
      <BreakClock 
        sessionTime={formatTime(sessionTime)} 
        breakTime={formatTime(breakTime)} 
        sessionNumber={sessionNumber} 
        clickActions={[pauseClick, playClick ]} 
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
