import React, { createContext, useContext, useReducer, ReactNode } from "react";
import GameState from "../types/GameState";
import Action from "../types/Action";

const initialState: GameState = {
  cards: [],
  selectedCards: [],
  currentScore: 0,
  bestScore: 0,
  mode: null,
  loading: false,
};

const gameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case "SET_CARDS":
      return { ...state, cards: action.payload };
    case "SET_MODE":
      return { ...state, mode: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "ADD_SELECTED_CARD":
      return {
        ...state,
        selectedCards: [...state.selectedCards, action.payload],
      };
    case "RESET_SELECTED_CARDS":
      return { ...state, selectedCards: [] };
    case "SET_CURRENT_SCORE":
      return { ...state, currentScore: action.payload };
    case "SET_BEST_SCORE":
      return { ...state, bestScore: action.payload };
    case "SHUFFLE_CARDS":
      return {
        ...state,
        cards: [...state.cards].sort(() => Math.random() - 0.5),
      };
    default:
      return state;
  }
};

const GameContext = createContext<{
  state: GameState;
  dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
