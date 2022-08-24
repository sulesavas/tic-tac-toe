import React from 'react'

function Score({playerX, playerO}) {
    return (
        <div>
            <div className="scoreBoardText card-header bg-transparent">SCORE BOARD</div>
          <div className="row card-body">
            <div className="col border mx-2 px-2 pt-5 pb-5 ">

              <div className=" player">Player X</div>
              <div className="score mt-3 card bg-success text-white  mx-auto">{playerX}</div>

            </div>
            <div className="col border mx-2 px-2 pt-5 pb-5">
              <div className=" player">Player O</div>
              <div className="score mt-3 card bg-success text-white  mx-auto">{playerO}</div>
            </div>
          </div>

        </div>
    )
}

export default Score
