import React, { useEffect, useState } from 'react';
import Board from './Board';
import Score from './Score';
import NewGameButton from './NewGameButton';


function Game() {

  const [gameStarted, setGameStarted] = useState(false);
  const [playerX, setPlayerX] = useState(0);
  const [playerO, setPlayerO] = useState(0);


  useEffect(() => {
    if (playerX === 3) {
      alert('Player X win!');
      finishGame();
    }
    else if (playerO === 3) {
      alert('Player O win!');
      finishGame();
    }
  }, [playerX, playerO])

  const addScore = (player) => {

    if (player === 'X')
      setPlayerX(playerX + 1);
    else if (player === 'O')
      setPlayerO(playerO + 1);

  }

  const startGame = () => {
    setGameStarted(true);
  }

  const finishGame = () =>{
    setPlayerX(0);
    setPlayerO(0);
    setGameStarted(false);
  }

  return (
    <center><div className="container card m-5">
      <div className="pageTitle card-header">Tic Tac Toe Game</div>
      <div className="boardCard card-body row">

        {gameStarted ?
          <>
            <div className="col card mx-3">
              <Board addScore={addScore} />
            </div>
            <div className="col card text-center mx-3">
              <Score playerX={playerX} playerO={playerO} />
            </div>
          </> :
          <div className="newGameButton col" >
            <NewGameButton startGame={startGame} />
          </div>
        }


      </div>
    </div>
    </center>
  )
}

export default Game;
