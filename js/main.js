// gameboard object
const gameboardMain = (function() {
    const board = [['X','X','O'], ['X','O','O'], ['O','X','O']];
    return {board};
})();


// create user object
const createUser = function(name) {
    const userName = name;
    return {userName};
}

// store players
const player1 = createUser('Ash');
const player2 = createUser('Krishty');