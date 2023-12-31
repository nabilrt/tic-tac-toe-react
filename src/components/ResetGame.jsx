import { useTicTacToe } from "../context/game-context";
import Button from "../module/Button";

const ResetGame = () => {
  const { ResetGame } = useTicTacToe();
  return (
    <div className="flex space-y-4">
      <Button variant="primary" onClick={ResetGame}>
        Reset Game
      </Button>
    </div>
  );
};

export default ResetGame;
