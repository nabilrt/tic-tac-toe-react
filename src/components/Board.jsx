import { Fragment } from "react";
import { useTicTacToe } from "../context/game-context";

const GameBoard = () => {
  const { board, handleClick } = useTicTacToe();
  return (
    <Fragment>
      <div className="flex w-1/4 items-center text-center">
        <div
          className="box-border border border-solid border-black p-8 basis-1/3 text-xl  h-24 hover:bg-stone-300 "
          onClick={() => handleClick(0, 0)}
        >
          {board[0][0]}
        </div>
        <div
          className="box-border border border-solid border-black p-8 basis-1/3 text-xl h-24 hover:bg-stone-300"
          onClick={() => handleClick(0, 1)}
        >
          {board[0][1]}
        </div>
        <div
          className="box-border border border-solid border-black p-8 basis-1/3 text-xl h-24 hover:bg-stone-300"
          onClick={() => handleClick(0, 2)}
        >
          {board[0][2]}
        </div>
      </div>
      <div className="flex w-1/4 items-center text-center">
        <div
          className="box-border border border-solid border-black p-8 basis-1/3 text-xl h-24 hover:bg-stone-300"
          onClick={() => handleClick(1, 0)}
        >
          {board[1][0]}
        </div>
        <div
          className=" box-border border border-solid border-black p-8 basis-1/3 text-xl h-24 hover:bg-stone-300"
          onClick={() => handleClick(1, 1)}
        >
          {board[1][1]}
        </div>
        <div
          className="box-border border border-solid border-black p-8 basis-1/3 text-xl h-24 hover:bg-stone-300"
          onClick={() => handleClick(1, 2)}
        >
          {board[1][2]}
        </div>
      </div>
      <div className="flex w-1/4 items-center text-center">
        <div
          className="box-border border border-solid border-black p-8 basis-1/3 text-xl h-24 hover:bg-stone-300"
          onClick={() => handleClick(2, 0)}
        >
          {board[2][0]}
        </div>
        <div
          className="box-border border border-solid border-black p-8 basis-1/3 text-xl h-24 hover:bg-stone-300"
          onClick={() => handleClick(2, 1)}
        >
          {board[2][1]}
        </div>
        <div
          className="box-border border border-solid border-black p-8 basis-1/3 text-xl h-24 hover:bg-stone-300"
          onClick={() => handleClick(2, 2)}
        >
          {board[2][2]}
        </div>
      </div>
    </Fragment>
  );
};

export default GameBoard;
