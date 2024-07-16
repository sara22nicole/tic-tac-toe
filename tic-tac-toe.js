console.log("tic tac toe");


//these are used to track start of game 
let turn, board, winner

//game logic

init()
//gamePlayLoop()
//Purpose of init function is to put state of game in a starting position
function init() {
    turn = "X"
    board = [
        " ", " ", " ",
        " ", " ", " ",
        " ", " ", " "
        ]
    winner = null;
    render()

}

function render() {
//rendering term
    console.log(`It is player ${turn}'s turn`);
    
}

//rendering board
function renderBoard(){
    console.log(`  ${board[0]}|${board[1]}|${board[2]}`);
    console.log(' --|-|--');
    console.log(`  ${board[3]}|${board[4]}|${board[5]}`);
    console.log(' --|-|--');
    console.log(`  ${board[6]}|${board[7]}|${board[8]}`);
}

//what goes into a turn of tic tac toe. Each turn will follow the same repeated behavior- don't know how long (while loop)
//1. have to choose an empty space
//2. put our player's character in that space on the board
//3. check if we won the game or not
//4. change turns

function gamePlayLoop(){
    while (!winner) {
    //contain all the code for what constitutes one turn
    }
}