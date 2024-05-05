// create user factory function
const createUser = function(userName, userMarker, userScore) {
    return {userName, userMarker, userScore};
}

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

                updateBoard(e.target.id, square, board);
            }
        });
    });
}


// Update the game board
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
    
    // save each click into a square slot
    const boardSlots = squareItem[squareId];
    [row, column] = boardSlots;
    if(boardSlots) {
        board[row][column] = square.textContent;
    }
    console.log(board);
};


// start game
const startGame = (function() {
    // store players
    const player1 = createUser('Ash', 'X', 0);
    const player2 = createUser('Krishty', 'O', 0);
    let playerTurn = player1;

    // gameboard object
    const board = [[],[],[]];

    // Handling the squares event listeners
    squareHandling(playerTurn, player1, player2, board);
    
    return {player1, player2, playerTurn, board, squareHandling};
})();