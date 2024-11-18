interface GameState {
  cards: { src: string; name: string }[];
  selectedCards: string[];
  currentScore: number;
  bestScore: number;
  mode: "Easy" | "Medium" | "Hard" | null;
  loading: boolean;
}

export default GameState;
