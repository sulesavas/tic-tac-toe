import React, { useState } from 'react';
import Square from './Square';


function Board({ addScore }) {

  
  const [player, setPlayer] = useState('X');

  const [squares, setSquares] = useState([
    '', '', '',
    '', '', '',
    '', '', ''
  ]);

  const handleClick = (idx) => {

    let newSquares = squares.map((value, index) => {
      return (index === idx) ? player : value;
    })

    setSquares(newSquares);
    gameControl(newSquares);
    setPlayer(player === 'X' ? 'O' : 'X');
  }


  const gameControl = (newSquares) => {

    if ((newSquares[0] === player && newSquares[1] === player && newSquares[2] === player) ||
      (newSquares[3] === player && newSquares[4] === player && newSquares[5] === player) ||
      (newSquares[6] === player && newSquares[7] === player && newSquares[8] === player) ||
      (newSquares[0] === player && newSquares[3] === player && newSquares[6] === player) ||
      (newSquares[1] === player && newSquares[4] === player && newSquares[7] === player) ||
      (newSquares[2] === player && newSquares[5] === player && newSquares[8] === player) ||
      (newSquares[0] === player && newSquares[4] === player && newSquares[8] === player) ||
      (newSquares[2] === player && newSquares[4] === player && newSquares[6] === player)) {
      addScore(player);
      setSquares([
        '', '', '',
        '', '', '',
        '', '', ''
      ])
    }
    else if(!newSquares.includes('')){
      setSquares([
        '', '', '',
        '', '', '',
        '', '', ''
      ])
    }

  }


  const renderSquare = (i) => {
    return <Square value={squares[i]} handleClick={() => handleClick(i)} />;
  }



  return (
    <div>
      <div className="player card-header bg-transparent">Turn of Player {player}</div>
<div className="card-body ">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
    </div>
  );

}

export default Board;