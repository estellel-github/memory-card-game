import React, { useEffect } from "react";
import { useGameContext } from "./context/GameContext";
import ModeSelection from "./components/ModeSelection";
import Card from "./components/Card";
import Scoreboard from "./components/ScoreBoard";
import fetchImages from "./services/fetchImages";
import Image from "./types/Image";

const App: React.FC = () => {
  const { state, dispatch } = useGameContext();
  const { cards, selectedCards, currentScore, bestScore, mode, loading } =
    state;

  useEffect(() => {
    async function getCards() {
      dispatch({ type: "SET_LOADING", payload: true });

      const images = await fetchImages();
      let selectedImages: Image[];

      switch (mode) {
        case "Easy":
          selectedImages = images.slice(0, 4);
          break;
        case "Medium":
          selectedImages = images.slice(0, 8);
          break;
        case "Hard":
          selectedImages = images;
          break;
        default:
          selectedImages = [];
      }

      dispatch({ type: "SET_CARDS", payload: selectedImages });

      setTimeout(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      }, 1000);
    }

    if (mode) {
      getCards();
    }
  }, [mode, dispatch]);

  const handleCardClick = (image: string) => {
    if (loading) return;

    dispatch({ type: "SET_LOADING", payload: true });

    setTimeout(() => {
      if (selectedCards.includes(image)) {
        dispatch({ type: "SET_CURRENT_SCORE", payload: 0 });
        dispatch({ type: "RESET_SELECTED_CARDS" });
      } else {
        dispatch({ type: "ADD_SELECTED_CARD", payload: image });
        dispatch({ type: "SET_CURRENT_SCORE", payload: currentScore + 1 });
        if (currentScore + 1 > bestScore) {
          dispatch({ type: "SET_BEST_SCORE", payload: currentScore + 1 });
        }
      }
      dispatch({ type: "SHUFFLE_CARDS" });

      setTimeout(() => {
        dispatch({ type: "SET_LOADING", payload: false });
      }, 1000);
    }, 100);
  };

  const handleChooseDifficulty = () => {
    dispatch({ type: "SET_MODE", payload: null });
  };

  if (!mode) {
    return <ModeSelection />;
  }

  return (
    <div className="app-container">
      <h1>Memory Card Game</h1>
      <div className="">
        <button
          onClick={handleChooseDifficulty}
          className="choose-difficulty-btn"
        >
          Choose Difficulty
        </button>
      </div>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <div className="card-grid">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={loading ? "/src/assets/card-back.svg" : card.src}
            name={card.name}
            handleClick={handleCardClick}
            isDisabled={loading}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
