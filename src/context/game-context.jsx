import { createContext, useContext, useReducer, useState } from "react";
import { INITIAL_STATE, stageReducer } from "../reducer/stage-reducer";

export const GameProvider = createContext();

export const GameContextProvider = ({ children }) => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const [state, dispatch] = useReducer(stageReducer, INITIAL_STATE);

  const [player1Name, setPlayer1Name] = useState(null);
  const [player2Name, setPlayer2Name] = useState(null);
  const [players, setPlayers] = useState({
    player: {
      name: player1Name,
      symbol: "X",
    },
    computer: {
      name: player2Name,
      symbol: "O",
    },
  });
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);
  const [count, setCount] = useState(1);
  const [playingMode, setPlayingMode] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState(players.player.symbol);

  const checkWinner = () => {
    for (let i = 0; i < board.length; i++) {
      if (
        board[i][0] !== "" &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2] &&
        board[i][1] === board[i][2]
      ) {
        if (board[i][0] === players.player.symbol) {
          setWinner(players.player.name);
          return;
        } else if (board[i][0] === players.computer.symbol) {
          setWinner(players.computer.name);
          return;
        }
      }
    }

    for (let i = 0; i < board.length; i++) {
      if (
        board[0][i] !== "" &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i] &&
        board[1][i] === board[2][i]
      ) {
        if (board[0][i] === players.player.symbol) {
          setWinner(players.player.name);
          return;
        } else if (board[0][i] === players.computer.symbol) {
          setWinner(players.computer.name);
          return;
        }
      }
    }

    if (
      (board[0][0] !== "" &&
        board[0][0] === board[1][1] &&
        board[0][0] === board[2][2] &&
        board[1][1] === board[2][2]) ||
      (board[0][2] !== "" &&
        board[0][2] === board[1][1] &&
        board[0][2] === board[2][0] &&
        board[1][1] === board[2][0])
    ) {
      if (board[1][1] === players.player.symbol) {
        setWinner(players.player.name);
        return;
      } else if (board[1][1] === players.computer.symbol) {
        setWinner(players.computer.name);
        return;
      }
    }
  };

  const checkDraw = () => {
    let count = 0;
    board.forEach((row) => {
      row.forEach((col) => {
        if (col !== "") {
          count++;
        }
      });
    });
    if (count === 9) {
      setDraw(true);
    }
  };

  const handleClick = (row, col) => {
    setCount((prevCount) => prevCount + 1);
    if (board[row][col] === "" && winner === null) {
      let newBoard = [...board];
      newBoard[row][col] = currentPlayer;

      setBoard(newBoard);
      if (count >= 5) {
        checkWinner();
      }
      checkDraw();
      if (playingMode === "single" && winner === null) {
        computerMove();
      } else if (playingMode === "multi" && winner === null) {
        if (currentPlayer === players.player.symbol) {
          setCurrentPlayer(players.computer.symbol);
        } else {
          setCurrentPlayer(players.player.symbol);
        }
      }
    }
  };

  const computerMove = () => {
    if (playingMode === "single" && winner !== null) {
      return;
    } else {
      let newBoard = [...board];
      let row = Math.floor(Math.random() * 3);
      let col = Math.floor(Math.random() * 3);
      if (newBoard[row][col] === "") {
        newBoard[row][col] = players.computer.symbol;
        setBoard(newBoard);
        checkWinner();
        checkDraw();
      } else if (winner === null) {
        computerMove();
      }
    }
  };

  const ResetGame = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner(null);
    setDraw(false);
    setCount(1);
    setCurrentPlayer(players.player.symbol);
  };

  const FirstStage = (e) => {
    setPlayingMode(e);
    dispatch({ type: "FIRST_STAGE_COMPLETED" });
  };

  const SecondStage = (player1Name = "Player 1", player2Name = "Computer") => {
    setPlayer1Name(player1Name);
    setPlayer2Name(player2Name);
    const updatedPlayers = {
      player: {
        name: player1Name,
        symbol: players.player.symbol,
      },
      computer: {
        name: player2Name === null ? "Computer" : player2Name,
        symbol: players.computer.symbol,
      },
    };

    setPlayers(updatedPlayers);
    dispatch({ type: "SECOND_STAGE_COMPLETED" });
  };

  return (
    <GameProvider.Provider
      value={{
        handleClick,
        winner,
        draw,
        setPlayingMode,
        playingMode,
        board,
        ResetGame,
        state,
        FirstStage,
        SecondStage,
        player1Name,
        player2Name,
        setPlayer1Name,
        setPlayer2Name,
      }}
    >
      {children}
    </GameProvider.Provider>
  );
};

export const useTicTacToe = () => {
  const context = useContext(GameProvider);
  if (context === null) {
    throw new Error("useTicTacToe must be used within a GameProvider");
  }
  return context;
};
