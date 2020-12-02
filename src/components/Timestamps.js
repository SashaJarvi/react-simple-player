import React from "react";
import "./Timestamps.scss"

function Timestamps(props) {
  const convertTime = timestamp => {
    let minutes = Math.floor(timestamp / 60);
    let seconds = timestamp - (minutes * 60);

    if (seconds < 10) {
      seconds = '0' + seconds
    }

    timestamp = `${minutes}:${seconds}`;
    return timestamp;
  }

  return (
    <div className="Timestamps">
      <div className="Time Time--current">{convertTime(props.currentTime)}</div>
      <div className="Time Time--total">{convertTime(props.duration)}</div>
    </div>
  )
}

export default Timestamps;
