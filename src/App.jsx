import React from "react"
import Space from "./components/Space.jsx"
import './index.css'

export default function App() { 
    function setBoard(){
        let board = [];
    
        for(let i = 0 ; i < 35 ; i ++){
            board.push({
                value: "⚪", 
                id: i,
                col: i % 7,
                color: "white"
            })
        } 
        return board;   
    }
    
    let tmp;
    
    
    
    // console.log(localStorage.getItem("board"))
    
    let setter;
    
    if (localStorage.getItem("board")=== null){
      setter = setBoard()  
    } else {
      setter = JSON.parse(localStorage.getItem("board"))
    }
    const [boardState, setBoardState] = React.useState(setter)
    const [turnState, setTurnState] = React.useState(true)
    const [gameEnd, setGameEnd] = React.useState(false)
    
    localStorage.setItem("board", JSON.stringify(boardState))
    // localStorage.clear();
    
    function printBoardToConsole(board){
        board.reduce((prevVal, item, ind, arr) =>{
            prevVal.push(item.value);
            if (prevVal.length == 7){
                console.log(prevVal)
                prevVal = []
            }
            return prevVal
        }, [])
    }
    
    function checkWin(){
        for(let i = 34 ; i >= 0 ; i--){
            
            if (boardState[i].value != "⚪"){
                if (checkDiagLeft(i)){
                    console.log(`${boardState[i].value} Wins!`)
                    setGameEnd(true);
                    return true;
                } else if (checkHorizontal(i)){
                    console.log(`${boardState[i].value} Wins!`)
                    setGameEnd(true);
                    return true;
                } else if (checkDiagRight(i)){
                    console.log(`${boardState[i].value} Wins!`)
                    setGameEnd(true);
                    return true;
                } else if (checkVert(i)){
                    console.log(`${boardState[i].value} Wins!`)
                    setGameEnd(true);
                    return true;
                }
            }
        }
        return false;
    }
    
    function checkVert(i){
	    if (boardState[i].value == boardState[i-7]?.value 
        && boardState[i].value == boardState[i-14]?.value 
        && boardState[i].value == boardState[i-21]?.value){
            return true;
        } else {
            return false;
        }
    }
    
    function checkHorizontal(i){
        if (i%7 < 3){
            return false;
        } else if (boardState[i].value == boardState[i-1]?.value 
        && boardState[i].value == boardState[i-2]?.value 
        && boardState[i].value == boardState[i-3]?.value){
            return true;
        } else {
            return false;
        }
    }
    
    function checkDiagRight(i){
        if (i%7 > 3){
            return false;
        } else if (boardState[i].value == boardState[i-6]?.value 
        && boardState[i].value == boardState[i-12]?.value 
        && boardState[i].value == boardState[i-18]?.value){
            console.log(i)
            return true;
        } else {
            return false;
        }
    }
    
    function checkDiagLeft(i){
        if (i%7 < 3){
            return false;
        } else if (boardState[i].value == boardState[i-8]?.value 
        && boardState[i].value == boardState[i-16]?.value 
        && boardState[i].value == boardState[i-24]?.value){
            return true;
        } else {
            return false;
        }
    }
    
    function dropToken(turn, col){
        let tempBoard = boardState.slice()
        let tokenLocation
        for(let i = 34 ; i >= 0 ; i--){
            if(tempBoard[i].col == col && tempBoard[i].value == "⚪"){
                tempBoard[i].value = turn ? "🔴" : "⚫";
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

    // printBoardToConsole(boardState)  
    
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
            <h1 className="title">Connect4</h1>
            <h2 className="subtitle">Four tiles in a row wins!</h2>
            <div className="background">
                {displaySpaces}
            </div>
            {!gameEnd ? <button className= "resetGame" onClick={resetGame}>Reset Game</button>
            : <button className = "invisible"></button>}
        </main>
        <div>
          {gameEnd && <button className= "newGame" onClick={resetGame}>New Game</button>}
        </div>
      </>
    )
}