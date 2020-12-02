import React, {useState} from "react";
import './Player.scss';

import TrackInformation from "./components/TrackInformation";
import Scrubber from "./components/Scrubber";
import Controls from "./components/Controls";
import Timestamps from "./components/Timestamps";

function Player(props) {
  const [playStatus, updatePlayStatus] = useState('play');
  const [currentTime, updateCurrentTime] = useState(0);

  const updateTime = timestamp => {
    timestamp = Math.floor(timestamp);
    updateCurrentTime(timestamp);
  }

  const updateScrubber = percent => {
    const scrubberInner = document.querySelector('.Scrubber-Progress');
    scrubberInner.style['width'] = percent;
  }

  const togglePlay = () => {
    let status = playStatus;
    const audio = document.getElementById('audio');

    if (status === 'play') {
      status = 'pause';
      audio.play();

      setInterval(() => {
        let currentTime = audio.currentTime;
        let duration = props.track.duration;

        let percent = (currentTime / duration) * 100 + '%';
        updateScrubber(percent);
        updateTime(currentTime);
      }, 100)
    } else {
      status = 'play';
      audio.pause();
    }

    updatePlayStatus(status);
  }

  return (
    <div className="Player">
      <div className="Background" style={{'backgroundImage': `url(${props.track.artwork})`}} />

      <div className="Header">
        <div className="Title">Now Playing</div>
      </div>

      <div className="Artwork" style={{'backgroundImage': `url(${props.track.artwork})`}} />

      <TrackInformation track={props.track} />

      <Scrubber />

      <Controls isPlaying={playStatus} onClick={togglePlay} />

      <Timestamps currentTime={currentTime} duration={props.track.duration} />

      <audio id="audio">
        <source src={props.track.source}/>
      </audio>
    </div>
  )
}

Player.defaultProps = {
  track: {
    name: "We Were Young",
    artist: "Odesza",
    album: "Summer's Gone",
    year: 2012,
    artwork: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
    duration: 192,
    source: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
  }
}

export default Player;
