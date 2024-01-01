import { Fragment } from "react";
import "./App.css";
import GameBoard from "./components/Board";
import { useTicTacToe } from "./context/game-context";
import Winner from "./components/Winner";
import Draw from "./components/Draw";
import PlayingMode from "./components/PlayingMode";
import ResetGame from "./components/ResetGame";
import AddNames from "./components/AddNames";

function App() {
  const { winner, draw, state } = useTicTacToe();

  return (
    <div className="flex  h-screen ">
      <div className="flex  w-full flex-col items-center justify-center  p-4 ">
        <div className="mb-4 flex space-x-3 ">
          <span className=" text-2xl">Welcom to Tic-Tac-Toe by</span>
          <img src="/react.svg" className="inline animate-spin"></img>
        </div>
        {!state.firstStage && <PlayingMode />}
        {state.firstStage && !state.secondStage && <AddNames />}
        {state.firstStage && state.secondStage && (
          <Fragment>
            <GameBoard />
            {winner ? (
              <Fragment>
                <Winner winner={winner} /> <ResetGame />
              </Fragment>
            ) : (
              <div>
                {draw && (
                  <Fragment>
                    <Draw /> <ResetGame />
                  </Fragment>
                )}
              </div>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
