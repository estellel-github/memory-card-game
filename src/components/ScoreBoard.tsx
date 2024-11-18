import React from "react";

interface ScoreboardProps {
  currentScore: number;
  bestScore: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboard">
      <h2>Current Score: {currentScore}</h2>
      <h2>Best Score: {bestScore}</h2>
    </div>
  );
};

export default Scoreboard;
