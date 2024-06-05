import React from "react"
import Space from "./components/Space.jsx"
import Score from "./components/Score.jsx"
import connect4 from "./GameLogic.js"
import './index.css'

export default function App() { 
    // let game = new connect4.GameLogic();
    
    // game.printBoardToConsole();
    // let setter;
    
    // if (localStorage.getItem("board")=== null){
    //   setter = setBoard()  
    // } else {
    //   setter = JSON.parse(localStorage.getItem("board"))
    // }
    // const [boardState, setBoardState] = React.useState(setter)

    // const [turnState, setTurnState] = React.useState(true)
    // const [gameEnd, setGameEnd] = React.useState(false)
    // const [score, setScore] = React.useState({
    //     "red": 0,
    //     "black": 0
    // })
    
    // localStorage.setItem("board", JSON.stringify(boardState))

    
    // let displaySpaces = boardState.map((item)=>{
    //     return (<Space color={item.color} key={item.id} clickHandler= {gameEnd ? undefined : ()=>dropToken(turnState, item.col)}/>)
    // })
        
    
    // function resetGame() {
    //     setBoardState(setBoard());
    //     localStorage.clear();
    //     setTurnState(true);
    //     setGameEnd(false);
    // }
    
    return (
      <>
        <main>
            <h1>
                Testing
            </h1>
        </main>
      </>
    )
}
            // <div className="hero">
            //     <h1 className="title">Connect4</h1>
            //     <h2 className="subtitle">Four tokens in a row wins!</h2>
            // </div>
            // <div className="background">
            //     {displaySpaces}
            // </div>
            // <section className="lower-bar">
            //     <div className="gameDetails">
            //         <div className="scores">
            //             <Score score = {score.red} color="red"/>
            //             <Score score = {score.black} color="black"/>
            //         </div>
            //         <div className="resetGameBox">
            //             {!gameEnd ? <button className= "resetGame" onClick={resetGame}>Reset Game</button> : <button className = "resetGame invisible"></button>}
            //         </div>
            //     </div>
            // </section>
            // {gameEnd && <button className= "newGame" onClick={resetGame}>New Game</button>}