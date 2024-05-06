// create user factory function
function createUser(userName, userMarker) {
    let userScore = 0;
    const getScore = () => userScore;
    const giveScore = () => userScore++;
    return {userName, userMarker, giveScore, getScore};
}

const player1 = createUser('Ash', 'X');
const player2 = createUser('Krishty', 'O');
let playerTurn = player1;


// displayControllers
const displayControllers = ((player1Score, player2Score) => {
    let currentRound = 0;

    player1Score = document.querySelector('#player1-score');
    player2Score = document.querySelector('#player2-score');
    gameRound = document.querySelector('#round-num');

    // update player score
    player1Score.textContent = player1.getScore();
    player2Score.textContent = player2.getScore();

    // update round
    gameRound.textContent = currentRound;
})();