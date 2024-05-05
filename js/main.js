// gameboard object
const gameboardMain = (function() {
    const board = [[1,2,3],[4,5,6],[7,8,9]];
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

            if(e.target.id === 'square1') {
                gameboardMain.board[0][0] = square.textContent;
                console.log(gameboardMain.board);
            } else if (e.target.id === 'square2') {
                gameboardMain.board[0][1] = square.textContent;
                console.log(gameboardMain.board);
            } else if (e.target.id === 'square3') {
                gameboardMain.board[0][2] = square.textContent;
                console.log(gameboardMain.board);
            }
        }
    });
});