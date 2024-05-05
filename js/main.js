// gameboard object
const gameboardMain = (function() {
    const board = [['X','X','O'], 
                   ['X','O','O'],
                   ['O','X','O']];
    return {board};
})();


// create user factory function
const createUser = function(name, score) {
    const userName = name;
    const userScore = score;
    return {userName, userScore};
}


// store players
const player1 = createUser('Ash', 0);
const player2 = createUser('Krishty', 1);