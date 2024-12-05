import ScoreboardProps from "../types/ScoreboardProps";

const Scoreboard = ({ currentScore, bestScore }: ScoreboardProps) => {
  return (
    <div className="scoreboard">
      <h2>Current Score: {currentScore}</h2>
      <h2>Best Score: {bestScore}</h2>
    </div>
  );
};

export default Scoreboard;
