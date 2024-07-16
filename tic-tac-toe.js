console.log("tic tac toe");


//these are used to track start of game 
let turn, board

//game logic

init()
//Purpose of init function is to put state of game in a starting position
function init() {
    turn = "X"
    board = [
        " ", " ", " ",
        " ", " ", " ",
        " ", " ", " "
        ]
    render()

}

function render() {
//rendering term
    console.log(`It is player ${turn}'s turn`);
    
}

//rendering board
function renderBoard(){
    console.log(' 1 |2| 3');
    console.log(`1 ${board[0]}|${board[1]}|${board[2]}`);
    console.log(' --|-|--');
    console.log(`2 ${board[3]}|${board[4]}|${board[5]}`);
    console.log(' --|-|--');
    console.log(`3 ${board[6]}|${board[7]}|${board[8]}`);
}