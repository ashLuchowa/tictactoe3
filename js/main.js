// Create user factory function
function createUser(userMarker) {
    let userScore = 0;
    const getScore = () => userScore;
    const giveScore = () => userScore++;
    return {userMarker, giveScore, getScore};
}


board = [['','',''],['','',''],['','','']];
const playerX = createUser('X');
const playerO = createUser('O');
let currentRound = 1;
let playerTurn = playerX;
let gameEnded = false;


// Update player score DOM
function updateScore() {
    document.querySelector('#playerx-score').textContent = playerX.getScore();
    document.querySelector('#playero-score').textContent = playerO.getScore();
    document.querySelector('#round-num').textContent = currentRound;
}

// reset game
function resetGame() {
    const squares = document.querySelectorAll('.square');
    board = board = [['','',''],['','',''],['','','']];

    squares.forEach((square) => {
        square.textContent = '';
    })

    gameEnded = false;
    playerTurn = playerX;
}


// Display markers on each squares
const squareHandling = (function() {
    const squares = document.querySelectorAll('.square');
    
    squares.forEach((square) => {
        square.addEventListener('click', (e) => {
            if(!e.target.textContent && !gameEnded) {
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
        alert(`${playerX.userMarker} wins!`);
        gameEnded = true;
        playerX.giveScore();
        currentRound++;
        updateScore();
        resetGame();
    }
}