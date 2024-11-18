import React from "react";
import { useGameContext } from "../context/GameContext";

const ModeSelection: React.FC = () => {
  const { dispatch } = useGameContext();

  const handleModeSelection = (mode: "Easy" | "Medium" | "Hard") => {
    dispatch({ type: "SET_MODE", payload: mode });
  };

  return (
    <div className="mode-selection">
      <h1>
        Chihuhua Mix<br></br>Memory Card Game
      </h1>
      <h2>Select Difficulty</h2>
      <div className="mode-selection-btns">
        <button onClick={() => handleModeSelection("Easy")}>Easy</button>
        <button onClick={() => handleModeSelection("Medium")}>Medium</button>
        <button onClick={() => handleModeSelection("Hard")}>Hard</button>
      </div>
    </div>
  );
};

export default ModeSelection;
