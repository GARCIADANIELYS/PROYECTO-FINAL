import React, { useContext } from "react";
import { ApiContext } from "../services/Api"; 

const MusicPlayer = () => {
  const {
    currentTrack,
    isPlaying,
    playPauseTrack,
  } = useContext(ApiContext);

  if (!currentTrack) {
    return null;
  }

  return (
    <div className="music-player-container">
      <div className="music-player-info">
        <p>{currentTrack.name}</p>
        <p>{currentTrack.artist}</p>
      </div>
      <div className="music-player-controls">
        <button onClick={playPauseTrack}>
          {isPlaying ? "Pausar" : "Reproducir"}
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
