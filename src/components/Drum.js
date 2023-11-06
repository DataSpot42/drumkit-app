import { useEffect, useState } from "react";

function Drum(props) {
const [playing, setPlaying] = useState(false)
const playhandler = () => {
    setPlaying(true)
 new Audio(props.sound).play();
 console.log(props)
 setTimeout (() => {
    setPlaying(false)
 },150)
}
useEffect(() => {
    const fetchkey = () => {
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === props.letter.toLowerCase()) {
        playhandler();}
    })
}
fetchkey(props.letter)
}
,[]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className={`drum ${playing ? "playing" : ""}`} onClick={playhandler} >
        <div className="key" >{props.letter}
        <div className="drumName">{props.name}</div>
        </div>
    </div>
  )
}

export default Drum