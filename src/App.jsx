import React from "react"
import Space from "./components/Space.jsx"
import Score from "./components/Score.jsx"
import connect4 from "./GameLogic.js"
import './index.css'

export default function App() { 
    let setter;
    
    if (localStorage.getItem("board")=== null){
      setter = setBoard()  
    } else {
      setter = JSON.parse(localStorage.getItem("board"))
    }
    const [boardState, setBoardState] = React.useState(setter)

    const [turnState, setTurnState] = React.useState(true)
    const [gameEnd, setGameEnd] = React.useState(false)
    const [score, setScore] = React.useState({
        "red": 0,
        "black": 0
    })
    
    localStorage.setItem("board", JSON.stringify(boardState))
    
    
    
    function dropToken(turn, col){
        let tempBoard = boardState.slice()
        let tokenLocation
        for(let i = 34 ; i >= 0 ; i--){
            if(tempBoard[i].col == col && tempBoard[i].color === "white"){
                tempBoard[i].color = turn ? "red" : "black"
                console.log(tempBoard[i].id)
                setTurnState((prevState)=>!prevState)
                break;
            }
        }
        checkWin()
        localStorage.setItem("board", JSON.stringify(tempBoard))
        setBoardState(tempBoard);
    }

    
    let displaySpaces = boardState.map((item)=>{
        return (<Space color={item.color} key={item.id} clickHandler= {gameEnd ? undefined : ()=>dropToken(turnState, item.col)}/>)
    })
        
    
    function resetGame() {
        setBoardState(setBoard());
        localStorage.clear();
        setTurnState(true);
        setGameEnd(false);
    }
    
    return (
      <>
        <main>
            <div className="hero">
                <h1 className="title">Connect4</h1>
                <h2 className="subtitle">Four tiles in a row wins!</h2>
            </div>
            <div className="background">
                {displaySpaces}
            </div>
            <section className="lower-bar">
                <div className="gameDetails">
                    <div className="scores">
                        <Score score = {score.red} color="red"/>
                        <Score score = {score.black} color="black"/>
                    </div>
                    <div className="resetGameBox">
                        {!gameEnd ? <button className= "resetGame" onClick={resetGame}>Reset Game</button> : <button className = "resetGame invisible"></button>}
                    </div>
                </div>
            </section>
            {gameEnd && <button className= "newGame" onClick={resetGame}>New Game</button>}
        </main>
      </>
    )
}