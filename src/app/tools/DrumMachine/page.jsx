'use client'
import React, { useEffect, useState } from 'react';
import './drum.css';

const drumPads = [
  { key: 'Q', id: 'Heater-1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { key: 'W', id: 'Heater-2', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { key: 'E', id: 'Heater-3', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
  { key: 'A', id: 'Heater-4', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { key: 'S', id: 'Clap', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { key: 'D', id: 'Open-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { key: 'Z', id: 'Kick-n-Hat', url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { key: 'X', id: 'Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { key: 'C', id: 'Closed-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
];


function DrumPad({ keyTrigger, id, url, onClick }) {
  return (
    <div id={id} className="drum-pad" onClick={() => onClick(keyTrigger, id)}>
      {keyTrigger}
      <audio className="clip" id={keyTrigger} src={url}></audio>
    </div>
  );
}

function DrumMachine() {
  const [display, setDisplay] = React.useState('');
  const [powerOnOff,setpowerOnOff] = useState(true)
  const [color,setColor] = useState('green');

  const handlePlaySound = (key, id) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setDisplay(id);
  };

  useEffect(() => {
    if(powerOnOff){
      setColor('green')
    }else{
      setColor('red')
    }
  },[powerOnOff])
  const handleKeyPress = (event) => {
    const key = event.key.toUpperCase();
    const pad = drumPads.find(p => p.key === key);
    if (pad) {
      handlePlaySound(pad.key, pad.id);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const power = () => {
    const pads = document.querySelectorAll('.drum-pad');
    pads.forEach(pad => {
      pad.classList.toggle('poweroff');
    });
    setpowerOnOff(!powerOnOff)
  }

  return (
    <div className='container'>
      <div id="drum-machine">
      
      <div id='container' className='container'>
      <div id="display">{display}</div>
      <div className="pad-container">
        {drumPads.map(pad => (
          <DrumPad
            key={pad.key}
            keyTrigger={pad.key}
            id={pad.id}
            url={pad.url}
            onClick={handlePlaySound}
          />
        ))}
      </div>
      <div id='power-on'>
        <button id='power' style={{backgroundColor: color}} onClick={() => power()}>Power {powerOnOff ? "On" : "Off"}</button>
      </div>
      </div>
      
    </div>
    </div>
    
  );
}

export default DrumMachine;
