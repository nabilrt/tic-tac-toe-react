import { Fragment } from "react";
import "./App.css";
import GameBoard from "./components/Board";
import { useTicTacToe } from "./context/game-context";
import Winner from "./components/Winner";
import Draw from "./components/Draw";
import PlayingMode from "./components/PlayingMode";
import ResetGame from "./components/ResetGame";

function App() {
  const { playingMode, winner, draw } = useTicTacToe();

  return (
    <div className="flex  h-screen ">
      <div className="flex  flex-col justify-center items-center p-4  w-full ">
        <div className="flex space-x-3 mb-4 ">
          <span className=" text-2xl">Welcom to Tic-Tac-Toe by</span>
          <img src="/react.svg" className="animate-spin inline"></img>
        </div>
        {!playingMode && <PlayingMode />}

        {playingMode && (
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
