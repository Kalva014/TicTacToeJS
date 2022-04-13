var playerTurn = 'X';
var numMoves = 0;
var playerScoreX = 0;
var playerScoreO = 0;
var ticTacToeArr = [0, 0, 0, 
                    0, 0, 0, 
                    0, 0, 0];

var winningSquares = [[0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]];

/* Initialize squares to be clickable */
var square1 = document.getElementById('element_one');
square1.addEventListener('click', () => addShapeToBoard(square1, 0));
var square2 = document.getElementById('element_two');
square2.addEventListener('click', () => addShapeToBoard(square2, 1));
var square3 = document.getElementById('element_three');
square3.addEventListener('click', () => addShapeToBoard(square3, 2));
var square4 = document.getElementById('element_four');
square4.addEventListener('click', () => addShapeToBoard(square4, 3));
var square5 = document.getElementById('element_five');
square5.addEventListener('click', () => addShapeToBoard(square5, 4));
var square6 = document.getElementById('element_six');
square6.addEventListener('click', () => addShapeToBoard(square6, 5));
var square7 = document.getElementById('element_seven');
square7.addEventListener('click', () => addShapeToBoard(square7, 6));
var square8 = document.getElementById('element_eight');
square8.addEventListener('click', () => addShapeToBoard(square8, 7));
var square9 = document.getElementById('element_nine');
square9.addEventListener('click', () => addShapeToBoard(square9, 8));

/* Initialize turn to be player X*/
document.getElementsByClassName('display_player')[0].innerHTML = 'X';

/* Adds shapes to the squares the user picked */
function addShapeToBoard(squarePressed, squareNum) {
    if(playerTurn == 'X') {
        squarePressed.children[0].className = "cross";
        ticTacToeArr[squareNum] = 1; // 1 represents X
    }
    else {
        squarePressed.children[0].className = "circle";
        ticTacToeArr[squareNum] = 2; // 2 represents O
    }

    numMoves += 1;

    if(numMoves >= 3) { // Added this so it doesn't check the first 3 moves
        checkIfWon();
    }
    
    checkIfBoardFull();
    changeTurn();
}

/* Check the winning squares array if the board */
function checkIfWon() {
    let index1;
    let index2;
    let index3;

    for(let i=0; i < winningSquares.length; i++) {
        index1 = winningSquares[i][0];
        index2 = winningSquares[i][1];
        index3 = winningSquares[i][2];

        if(ticTacToeArr[index1] == 1 && ticTacToeArr[index2] == 1 && ticTacToeArr[index3] == 1) {
            document.getElementById('winner').textContent = 'Player X is the winner!!!';
            playerScoreX += 1;
            document.getElementById('player-scores').textContent = `Scores: X= ${playerScoreX} O=${playerScoreO}`;
            break;
        }

        if(ticTacToeArr[index1] == 2 && ticTacToeArr[index2] == 2 && ticTacToeArr[index3] == 2) {
            document.getElementById('winner').textContent = 'Player O is the winner!!!';
            playerScoreO += 1;
            document.getElementById('player-scores').textContent = `Scores: X=${playerScoreX} O=${playerScoreO}`;
            break;
        }
    }
}

 /* Checks number of moves left and if the board is full */
function checkIfBoardFull() {
    if(numMoves == 9) {
        document.getElementById('number_of_moves').innerHTML = "NO MORE MOVES CAN BE MADE! THE BOARD IS FULL!";
    }
}

/* Changes the turn of the players*/
function changeTurn() {
    if(playerTurn == 'X') {
        document.getElementsByClassName('display_player')[0].innerHTML = 'O';
        playerTurn = 'O';
    }
    else {
        document.getElementsByClassName('display_player')[0].innerHTML = 'X';
        playerTurn = 'X';
    }
}

/* Starts a new game and keeps scores */
function newGame() {
    numMoves = 0;
    playerTurn = 'X';
    document.getElementsByClassName('display_player')[0].innerHTML = 'X';
    document.getElementById('number_of_moves').innerHTML = "";
    document.getElementById('winner').textContent = '';
    clearBoard();
}

/* Reset the game and reset scores */
function resetGame() {
    numMoves = 0;
    playerScoreX = 0;
    playerScoreO = 0;
    playerTurn = 'X';
    document.getElementsByClassName('display_player')[0].innerHTML = 'X';
    document.getElementById('player-scores').textContent = `Scores: X=${playerScoreX} O=${playerScoreO}`;
    document.getElementById('number_of_moves').innerHTML = "";
    document.getElementById('winner').textContent = '';
    clearBoard();
}

/* Removes all of the crosses and circles from the board*/
function clearBoard(){
    ticTacToeArr = [0, 0, 0, 
                    0, 0, 0, 
                    0, 0, 0];

    square1.children[0].className = "xo";
    square2.children[0].className = "xo";
    square3.children[0].className = "xo";
    square4.children[0].className = "xo";
    square5.children[0].className = "xo";
    square6.children[0].className = "xo";
    square7.children[0].className = "xo";
    square8.children[0].className = "xo";
    square9.children[0].className = "xo";
}

/* Starts a timer for users to make a move */
function ticTacToeGameMultiplayer() {

    setInterval(playerTimer, 1000); // A t
}

function playerTimer() {

}

/*  */
function ticTacToeGameAI() {

}