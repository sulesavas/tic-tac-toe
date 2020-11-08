import React from 'react'

 
function NewGameButton({startGame}) {
    return (
       <button className="btn btn-lg btn-danger" onClick={startGame}>▷ NEW GAME</button> 
    )

}



export default NewGameButton
