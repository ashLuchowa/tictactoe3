// create user factory function
function createUser(userName, userMarker) {
    userScore = 0;
    const getScore = () => userScore;
    const giveScore = () => userScore++;
    return {userName, userMarker, userScore, giveScore, getScore};
}

const player1 = createUser('Ash', 'X');
const player2 = createUser('Krishty', 'O');
let playerTurn = player1;

// gameboard object
const board = [[],[],[]];

// Handling the squares event listeners
const squareHandling = function(playerTurn, player1, player2, board) {
    const squares = document.querySelectorAll('.square');
    
    squares.forEach((square) => {
        square.addEventListener('click', (e) => {
            if(!e.target.textContent) {
                if(playerTurn === player1) {
                    square.textContent = player1.userMarker;
                    playerTurn = player2;
                } else {
                    square.textContent = player2.userMarker;
                    playerTurn = player1;
                }

                updateBoard(e.target.id, square, board, playerTurn);
            }
        });
    });
}


// Update the game board
const updateBoard = function(squareId, square, board, player1) {
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
    
    // Save each click into a square slot
    const boardSlots = squareItem[squareId];
    [row, column] = boardSlots;
    if(boardSlots) {
        board[row][column] = square.textContent;
    }

    // Update after winning
    winGame(board, player1);

    console.log(board);
};


// Win game
const winGame = function(board, player1) {
    const player1Score = document.querySelector('#player1-score');
    // Win conditions
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

    let endGame = false;

    if(winCondition('X')) {
        endGame = true;
        player1.giveScore();
        console.log('X wins!');
    } else if(winCondition('O')) {
        endGame = true;
        player2.giveScore();
        console.log('O wins!');
    }
}

// Handling the squares event listeners
squareHandling(playerTurn, player1, player2, board);