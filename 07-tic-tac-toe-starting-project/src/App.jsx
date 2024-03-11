import { useState } from "react"

import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./Components/GameOver";

const PLAYERS = {
  'X': 'Player 1', 
  'O': 'Player 2'
}

const INIIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function driveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function driveGameBoard(gameTurns){
  let gameBoard = [...INIIAL_GAME_BOARD].map(array => [...array]);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard
}

function driveWinner(gameBoard, players){
  let winner;
  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol = gameBoard[combinations[2].row][combinations[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }
  
  return winner; 
}

function App() {

  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = driveActivePlayer(gameTurns);
  const gameBoard = driveGameBoard(gameTurns)
  const winner = driveWinner(gameBoard, players)
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {


    setGameTurns(prevTurns => {
      const currentPlayer = driveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

      return updatedTurns;
    })
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayer => {
      return { ...prevPlayer, [symbol]: newName }
    })
  }
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player 
            intialName={PLAYERS.X} 
            PlayerSymbol="X" 
            isActive={activePlayer == 'X'}
            onChangeName={handlePlayerNameChange}
            />
            <Player 
            intialName={PLAYERS.O} 
            PlayerSymbol="O" 
            isActive={activePlayer == 'O'}
            onChangeName={handlePlayerNameChange}
            />
          </ol>
          {(winner || hasDraw) && <GameOver onReset={handleRestart} winner={winner} />}
          <GameBoard activePlayerSymbol={activePlayer} onSelectSquare={handleSelectSquare}
            board={gameBoard}
          />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  )
}

export default App
