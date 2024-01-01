import { useTicTacToe } from "../context/game-context";
import Button from "../module/Button";

const AddNames = () => {
  const {
    playingMode,
    SecondStage,
    setPlayer1Name,
    setPlayer2Name,
    player1Name,
    player2Name,
  } = useTicTacToe();
  return (
    <div className="flex flex-col space-y-3 p-4">
      <p className="text-xl font-semibold uppercase">Add Player Names</p>
      <input
        type="text"
        className="border border-solid border-[#00d8ff] p-4 font-semibold"
        placeholder="Enter Player 1 Name"
        value={player1Name}
        onChange={(e) => setPlayer1Name(e.target.value)}
      />
      {playingMode === "multi" && (
        <input
          type="text"
          className="border border-solid border-[#00d8ff] p-4 font-semibold"
          placeholder="Enter Player 1 Name"
          value={player2Name}
          onChange={(e) => setPlayer2Name(e.target.value)}
        />
      )}

      <Button
        variant="primary"
        disabled={!player1Name}
        onClick={() => {
          const firstPlayerName = player1Name;
          const secondaryPlayerName = player2Name;

          SecondStage(firstPlayerName, secondaryPlayerName);
        }}
      >
        Continue
      </Button>
    </div>
  );
};

export default AddNames;
