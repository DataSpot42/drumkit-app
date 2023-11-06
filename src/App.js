import { useState } from 'react';
import Drum from './components/Drum';
import './App.css';

function App() {
 
  const [sounds,setSounds] = useState ([  // eslint-disable-line
    {
      name: "boom",
      sound: require("./sounds/boom.wav"),
      key: "Y"
    },
    {
      name: "clap",      
      sound: require("./sounds/clap.wav"),
      key: "U"
    },
    {
      name: "hihat",      
      sound: require("./sounds/hihat.wav"),
      key: "I"
    },{
      name: "kick",      
      sound: require("./sounds/kick.wav"),
      key: "O"
    },{
      name: "openhat",      
      sound: require("./sounds/openhat.wav"),
      key: "P"
    },{
      name: "ride",      
      sound: require("./sounds/ride.wav"),
      key: "H"
    },
    {
      name: "snare",      
      sound: require("./sounds/snare.wav"),
      key: "J"
    },{
      name: "tink",      
      sound: require("./sounds/tink.wav"),
      key: "K"
    },
    {
      name: "tom",      
      sound: require("./sounds/tom.wav"),
      key: "L"
    },
  ])
  console.log(sounds)
  return (
    <div style={{ width: "35rem" }}>
    <div className="App">
      <h1>React Drumkit</h1>
      <div className="drum-grid">
      {sounds.map((sound) => (
        <Drum letter={sound.key} sound={sound.sound} name={sound.name} />
      )
      )}
      </div>
    </div>
    </div>
  );
}

export default App;
