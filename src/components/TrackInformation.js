import React from "react";
import "./TrackInformation.scss"

function TrackInformation(props) {
  return (
    <div className="TrackInformation">
      <div className="Name">{props.track.name}</div>
      <div className="Artist">{props.track.artist}</div>
      <div className="Album">{props.track.album} ({props.track.year})</div>
    </div>
  )
}

export default TrackInformation
