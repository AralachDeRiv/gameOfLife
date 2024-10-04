import React, { useState, useRef, useEffect } from "react";
import Grid from "../components/Grid";
import { createGrid, updateGrid } from "../utils/gameOfLifeFunctions";
import PlayMenu from "../components/PlayMenu";
import Title from "../components/Title";
import Menu from "../components/Menu";
import DisplayMenuBtn from "../components/DisplayMenuBtn";
import ThemeMenu from "../components/ThemeMenu";

const Home = () => {
  const [_, setRender] = useState(); // Utilisé uniquement pour forcer le re-render
  const cellsRef = useRef(createGrid());
  const [play, setPlay] = useState(false);
  const [speed, setSpeed] = useState(45);
  const [blockedBorders, setBlockedBorders] = useState({
    lateral: false,
    vertical: false,
  });
  const [patternOnClick, setPatternOnClick] = useState(null);
  const [displayedMenu, setDisplayedMenu] = useState(true);

  useEffect(() => {
    const gridContainer = document.querySelector(".grid-container");
    if (patternOnClick) {
      gridContainer.classList.add("present-pattern");
    } else {
      gridContainer.classList.remove("present-pattern");
    }
  }, [patternOnClick]);

  useEffect(() => {
    // Fonction qui ajuste la grille en fonction de la taille de la fenêtre
    const handleResize = () => {
      cellsRef.current = createGrid();
      setRender({}); // Forcer un re-render après le redimensionnement
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (play) {
      interval = setInterval(() => {
        const newGrid = updateGrid(cellsRef.current, blockedBorders);
        cellsRef.current = newGrid;
        setRender({});
      }, speed);
    }

    return () => clearInterval(interval);
  }, [play, speed, blockedBorders]);

  const btnSetPlay = () => {
    setPlay((prev) => !prev);
  };

  const btnNextRound = () => {
    const newGrid = updateGrid(cellsRef.current, blockedBorders);
    cellsRef.current = newGrid;
    setRender({});
  };

  const resetGrid = () => {
    cellsRef.current = createGrid();
    setRender({});
  };

  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed);
  };

  return (
    <>
      <DisplayMenuBtn
        displayedMenu={displayedMenu}
        onClick={() => setDisplayedMenu((prev) => !prev)}
      />
      {displayedMenu && (
        <>
          <Title />
          <ThemeMenu />
          <Menu
            setBlockedBorders={setBlockedBorders}
            blockedBorders={blockedBorders}
            setPatternOnClick={setPatternOnClick}
          />
        </>
      )}
      <PlayMenu
        btnSetPlay={btnSetPlay}
        btnNextRound={btnNextRound}
        changeSpeed={changeSpeed}
        resetGrid={resetGrid}
        play={play}
      />
      <Grid
        cellsRef={cellsRef}
        setRender={setRender}
        patternOnClick={patternOnClick}
        setPatternOnClick={setPatternOnClick}
      />
    </>
  );
};

export default Home;
