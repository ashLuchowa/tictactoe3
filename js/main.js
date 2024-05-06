// Create user factory function
function createUser(userMarker) {
    let userScore = 0;
    const getScore = () => userScore;
    const giveScore = () => userScore++;
    return {userMarker, giveScore, getScore};
}

const playerX = createUser('X');
const playerO = createUser('O');
let playerTurn = playerX;


// DisplayControllers
const displayControllers = ((playerXScore, playerOScore) => {
    let currentRound = 0;

    playerXScore = document.querySelector('#playerx-score');
    playerOScore = document.querySelector('#playero-score');
    gameRound = document.querySelector('#round-num');

    // Update player score
    playerXScore.textContent = playerX.getScore();
    playerOScore.textContent = playerO.getScore();

    // Update round
    gameRound.textContent = currentRound;
})();


// Gameboard object
const board = [['','',''],['','',''],['','','']];


// Display markers on each squares
const squareHandling = (function() {
    const squares = document.querySelectorAll('.square');
    
    squares.forEach((square) => {
        square.addEventListener('click', (e) => {
            if(!e.target.textContent) {
                if(playerTurn === playerX) {
                    square.textContent = playerX.userMarker;
                    playerTurn = playerO;
                } else {
                    square.textContent = playerO.userMarker;
                    playerTurn = playerX;
                }
                // Update board array
                updateBoard(e.target.id, square, board, playerTurn);
            }
            console.log(board);
        });
    });
})();


// Update the board array
const updateBoard = function(squareId, square, board) {
    const squareItem = {
        'square1': [0,0],
        'square2': [0,1],
        'square3': [0,2],
        'square4': [1,0],
        'square5': [1,1],
        'square6': [1,2],
        'square7': [2,0],
        'square8': [2,1],
        'square9': [2,2],
    }
    
    // Save each click into the board array
    const boardSlots = squareItem[squareId];
    [row, column] = boardSlots;
    if(boardSlots) {
        board[row][column] = square.textContent;
    }

    winGame();
};


// Win conditions
const winGame = function() {
    function winCondition(playerId) {
        return board[0][0] === playerId && board[0][1] === playerId && board[0][2] === playerId ||
               board[1][0] === playerId && board[1][1] === playerId && board[1][2] === playerId ||
               board[2][0] === playerId && board[2][1] === playerId && board[2][2] === playerId ||
               board[0][0] === playerId && board[1][0] === playerId && board[2][0] === playerId ||
               board[0][1] === playerId && board[1][1] === playerId && board[2][1] === playerId ||
               board[0][2] === playerId && board[1][2] === playerId && board[2][2] === playerId ||
               board[0][0] === playerId && board[1][1] === playerId && board[2][2] === playerId ||
               board[2][0] === playerId && board[1][1] === playerId && board[0][2] === playerId;
    };
    
    if(winCondition(playerX.userMarker)) {
        console.log(`${playerX.userMarker} wins!`);
    }
}