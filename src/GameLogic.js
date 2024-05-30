export default class GameLogic{
    constructor(gameInfo){
        this.score = gameInfo.score
        this.board = gameInfo.board
        this.turn = gameInfo.turn
    }

    getScore(){
        return this.score;
    }

    getBoard(){
        return this.board;
    }

    getTurn(){
        return this.turn;
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

    checkWin(){
        for(let i = 34 ; i >= 0 ; i--){
            if (this.board[i].color != "white"){
                if (checkDiagLeft(i)){
                    console.log(`${this.board[i].color} Wins!`)
                    this.board[i].color =="red" ? this.increaseScore("red")
                    : this.increaseScore("black") 
                    return true;
                } else if (checkHorizontal(i)){
                    console.log(`${this.board[i].color} Wins!`)
                    this.board[i].color =="red" ? this.increaseScore("red")
                    : this.increaseScore("black") 
                    return true;
                } else if (checkDiagRight(i)){
                    console.log(`${this.board[i].color} Wins!`)
                    this.board[i].color =="red" ? this.increaseScore("red")
                    : this.increaseScore("black") 
                    return true;
                } else if (checkVert(i)){
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
            prevVal.push(item.color === "white" ? "⚪" : item.color === "red" ? "red" : "⚫");
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
        black: 2,
        red: 4
    }, 
    board: ["white", "white", "white", "white", "red", "white", "white", "white", "white", "white", "white", "red", "white", "white", "white", "white", "white", "white", "red", "white", "white", "white", "white", "white", "white", "red", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
    turn: "red"
}
const newGame = new GameLogic(game);
// newGame.resetBoard()
// console.log(newGame.getTurn())
newGame.printBoardToConsole()
// console.log(newGame.getScore())
// newGame.increaseScore("black")
// console.log(newGame.getScore())
