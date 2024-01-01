import { useTicTacToe } from "../context/game-context";
import Button from "../module/Button";

const PlayingMode = () => {
  const { playingMode, setPlayingMode, FirstStage } = useTicTacToe();

  return (
    <div className="flex flex-col space-y-6">
      <p className="font-semibold text-2xl uppercase">
        Select Your Playing Mode
      </p>
      <select
        className="px-4 py-4 border font-semibold text-sm  border-[#00d8ff]"
        value={playingMode}
        onChange={(e) => setPlayingMode(e.target.value)}
      >
        <option value="">Choose An Option</option>
        <option value="single">Single Player</option>
        <option value="multi">Multi Player</option>
      </select>
      <Button type="button" onClick={() => FirstStage(playingMode)} variant="secondary">
        Select
      </Button>
    </div>
  );
};

export default PlayingMode;
