import React, {useEffect} from 'react';
import BreakClock from './components/BreakClock';
import Button from './Utilities/Button';
import './App.css';

const App = () => {

  const [breakLength, setBreakLength] = React.useState(5);
  const [sessionLength, setSessionLength] = React.useState(25);
  const [sessionNumber, setSessionNumber] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const onSessionIncrementClick = () => {
    if(sessionLength < 60)
      setSessionLength(sessionLength + 1);
  }

  const onSessionDecrementClick = () => {
    if(sessionLength > 15)
      setSessionLength(sessionLength - 1)
  }

  const onBreakLengthIncrementClick = () => {
    if(breakLength < 30)
      setBreakLength( breakLength + 1)
  }

  const onBreakLengthDecrementClick = () => {
    if(breakLength > 5)
      setBreakLength( breakLength - 1)
  }

  // useEffect(() => {
  //   while (isPlaying) {
  //     if(sessionLength > 0) {
  //         setSessionLength(sessionLength - 0.01);
  //     } else if(breakLength > 0 ){
  //         setBreakLength(breakLength - 0.01)
  //     }else {
  //       setSessionNumber(sessionNumber + 1);
  //       setIsPlaying(false);
  //       return
  //     }
  //   }
  // });



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
  


  return (
    <div className="App">
      <BreakClock sessionTime={sessionLength} breakTime={breakLength} sessionNumber={sessionNumber} />
      <Button id="play" onClick={playClick} text="play" />
      <Button id="pause" onClick={pauseClick} text="pause" />
      <Button id="break-increment" onClick={onBreakLengthIncrementClick} text="Break Increment" />
      <Button id="break-decrement" onClick={onBreakLengthDecrementClick} text="Break Decrement" />
      <Button id="session-increment" onClick={onSessionIncrementClick} text="Session Increment" />
      <Button id="session-decrement" onClick={onSessionDecrementClick} text="Session Decrement" />
    </div>
  );
}

export default App;
