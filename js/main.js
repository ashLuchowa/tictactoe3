// gameboard object
const gameboardMain = (function() {
    const board = [[],[],[]];
    return {board};
})();


// create user factory function
const createUser = function(name, marker, score) {
    const userName = name;
    const userMarker = marker;
    const userScore = score;
    return {userName, userMarker, userScore};
}


// store players
const player1 = createUser('Ash', 'X', 0);
const player2 = createUser('Krishty', 'O', 1);
let playerTurn = player1;

//
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

            const boardSlots = squareItem[e.target.id];
            [row, column] = boardSlots;
            if(boardSlots) {
                gameboardMain.board[row][column] = square.textContent;
            }

            console.log(gameboardMain.board);
        }
    });
});