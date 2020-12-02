import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay, faPause} from "@fortawesome/free-solid-svg-icons";
import "./Controls.scss"

function Controls(props) {
  const getIcon = (status) => {
    if (status === 'play') {
      return faPlay;
    } else if (status === 'pause') {
      return faPause;
    }
  }

  return (
    <div className="Controls">
      <div onClick={props.onClick} className="Button">
        <FontAwesomeIcon className="PlayIcon" icon={getIcon(props.isPlaying)} />
      </div>
    </div>
  )
}

export default Controls
