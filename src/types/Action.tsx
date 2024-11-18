type Action =
  | { type: "SET_CARDS"; payload: { src: string; name: string }[] }
  | { type: "SET_MODE"; payload: "Easy" | "Medium" | "Hard" | null }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "ADD_SELECTED_CARD"; payload: string }
  | { type: "RESET_SELECTED_CARDS" }
  | { type: "SET_CURRENT_SCORE"; payload: number }
  | { type: "SET_BEST_SCORE"; payload: number }
  | { type: "SHUFFLE_CARDS" };

export default Action;
