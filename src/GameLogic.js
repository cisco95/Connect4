export default class GameLogic{
    constructor(gameInfo){
        this.score = gameInfo.score
        this.board = gameInfo.board
        this.redTurn = gameInfo.turn
    }

    getScore(){
        return this.score;
    }

    getBoard(){
        return this.board;
    }

    getTurn(){
        return this.redTurn;
    }
    changeTurn() {
        this.redTurn = !this.redTurn; 
    }

    increaseScore(color){
        return {
            ...this.score, 
            color: this.score[color]++
        }
    }

    resetBoard(){
        let board = [];
    
        for(let i = 0 ; i < 35 ; i ++){
            board.push({
                id: i,
                col: i % 7,
                color: "white"
            })
        } 
        this.board = board;   
        return this.board;
    }

    dropToken(col){
        let tempBoard = this.board.slice()
        for(let i = 34 ; i >= 0 ; i--){
            if(col === tempBoard[i].col && tempBoard[i].color === "white"){
                console.log(i)
                console.log(col)
                tempBoard[i].color = this.redTurn ? "red" : "black"
                this.changeTurn()
                break;
            }
        }
        if (this.checkWin()){
            console.log("WIN!");
            console.log(this.getScore());
        }
        this.board = tempBoard;
    }

    checkWin(){
        for(let i = 34 ; i >= 0 ; i--){
            if (this.board[i].color != "white"){
                if (this.checkDiagLeft(i)){
                    console.log(`${this.board[i].color} Wins!`)
                    this.board[i].color =="red" ? this.increaseScore("red")
                    : this.increaseScore("black") 
                    return true;
                } else if (this.checkHorizontal(i)){
                    console.log(`${this.board[i].color} Wins!`)
                    this.board[i].color =="red" ? this.increaseScore("red")
                    : this.increaseScore("black") 
                    return true;
                } else if (this.checkDiagRight(i)){
                    console.log(`${this.board[i].color} Wins!`)
                    this.board[i].color =="red" ? this.increaseScore("red")
                    : this.increaseScore("black") 
                    return true;
                } else if (this.checkVert(i)){
                    console.log(`${this.board[i].color} Wins!`)
                    this.board[i].color =="red" ? this.increaseScore("red")
                    : this.increaseScore("black") 
                    return true;
                }
            }
        }
        return false;
    }
    
    checkVert(i){
	    if (this.board[i].color == this.board[i-7]?.color 
        && this.board[i].color == this.board[i-14]?.color 
        && this.board[i].color == this.board[i-21]?.color){
            return true;
        } else {
            return false;
        }
    }
    
    checkHorizontal(i){
        if (i%7 < 3){
            return false;
        } else if (this.board[i].color == this.board[i-1]?.color 
        && this.board[i].color == this.board[i-2]?.color 
        && this.board[i].color == this.board[i-3]?.color){
            return true;
        } else {
            return false;
        }
    }
    
    checkDiagRight(i){
        if (i%7 > 3){
            return false;
        } else if (this.board[i].color == this.board[i-6]?.color 
        && this.board[i].color == this.board[i-12]?.color 
        && this.board[i].color == this.board[i-18]?.color){
            console.log(i)
            return true;
        } else {
            return false;
        }
    }
    
    checkDiagLeft(i){
        if (i%7 < 3){
            return false;
        } else if (this.board[i].color == this.board[i-8]?.color 
        && this.board[i].color == this.board[i-16]?.color 
        && this.board[i].color == this.board[i-24]?.color){
            return true;
        } else {
            return false;
        }
    }
    
    printBoardToConsole(){
        this.board.reduce((prevVal, item) =>{
            prevVal.push(item.color === "white" 
            ? "⚪" 
            : item.color === "red"
            ? "🔴" :"⚫");
            if (prevVal.length == 7){
                console.log(...prevVal)
                prevVal = []
            }
            return prevVal
        }, [])
    }

}



let game = {
    score: {
        black: 0,
        red: 0
    }, 
    board: [],
    color: "red",
    turn: true
}
const newGame = new GameLogic(game);
newGame.resetBoard()
console.log(newGame.getTurn())
newGame.printBoardToConsole()

newGame.dropToken(3)
newGame.printBoardToConsole()
// console.log(newGame.getScore())
// newGame.increaseScore("black")
// console.log(newGame.getScore())
for (let i = 0; i < 14; i++){
    newGame.dropToken(i%5);
    newGame.printBoardToConsole()
}

newGame.dropToken(5)
newGame.printBoardToConsole()
newGame.dropToken(5)
newGame.printBoardToConsole()