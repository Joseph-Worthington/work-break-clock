import React, {useEffect, useState, useRef} from 'react';
import BreakClock from './components/BreakClock';
import TimerInterface from './components/TimerInterface';
import './App.css';

const App = () => {

  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [sessionTime, setSessionTime] = useState(sessionLength * 60); // in seconds
  const [sessionNumber, setSessionNumber] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sessionMessage, setSessionMessage] = useState('Session');
  const audioRef = useRef<HTMLAudioElement>(null);
  

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
    }
  };

  const onBreakLengthDecrementClick = () => {
    if (breakLength > 1) {
      setBreakLength(breakLength - 1);
    }
  };

  
  const playClick = () => {
    if(!isPlaying && sessionLength > 0) {
      setIsPlaying(true);
    }
    if(isPlaying && sessionLength > 0){
      setIsPlaying(false);
    }
  }

  const resetClick = () => {
    setIsPlaying(false);
    setSessionLength(25);
    setBreakLength(5);
    setSessionTime(25 * 60);
    setSessionNumber(0);
    setSessionMessage('Session');

    if(audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setSessionTime(prev => {
          if (prev > 0) {
            return prev - 1;
          } else {
            if (sessionMessage === 'Session') {
              audioRef.current?.play();
              setSessionMessage('Break time');
              return breakLength * 60;
            } else {
              audioRef.current?.play();
              setSessionMessage('Session');
              setSessionNumber(prev => prev + 1);
              return sessionLength * 60;
            }
          }
        });
      }, 1000); // Update every second
    }

    return () => clearInterval(timer); // Cleanup on unmount or when dependencies change
  }, [isPlaying, sessionLength, breakLength, sessionNumber, sessionMessage]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  


  return (
    <div className="App flex justify-center items-center bg-slate-900 text-white h-screen flex-col text-lg">
      <BreakClock 
        sessionTime={formatTime(sessionTime)} 
        sessionNumber={sessionNumber} 
        clickActions={[playClick, resetClick ]}
        sessionMessage={sessionMessage}
      />
      <TimerInterface 
        sessionLength={sessionLength} 
        breakLength={breakLength} 
        clickActions={[onBreakLengthDecrementClick, onBreakLengthIncrementClick, onSessionDecrementClick, onSessionIncrementClick ]} 
      />
      <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" ref={audioRef}></audio>
    </div>
  );
}

export default App;
