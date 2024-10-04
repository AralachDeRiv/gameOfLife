import React from "react";
import PlayPauseBtn from "./PlayPauseBtn";
import NextBtn from "./NextBtn";
import ResetBtn from "./ResetBtn";

const PlayMenu = ({
  btnSetPlay,
  btnNextRound,
  changeSpeed,
  play,
  resetGrid,
}) => {
  const rangeInput = (e) => {
    changeSpeed(e.target.value);
  };

  return (
    <div className="playMenu">
      <PlayPauseBtn play={play} onClick={() => btnSetPlay()} />
      <div className="range-input-container">
        <input
          className="reversed"
          type="range"
          min="15"
          max="150"
          onChange={(e) => rangeInput(e)}
        />
      </div>
      <NextBtn onClick={() => btnNextRound()} />
      <ResetBtn onClick={() => resetGrid()} />
    </div>
  );
};

export default PlayMenu;
