/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
// var scores = [0, 0];
// var roundScore = 0;
// var activePlayer = 0;
// var dice = Math.floor(Math.random()*6)+1;

// document.querySelector('#current-'+activePlayer).textContent = dice;
// document.querySelector('.dice').style.display = 'none';


var scores, roundScore, activePlayer, gameState;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    // checking game state
    if (gameState) {
        // dice rolled
        var dice = Math.floor(Math.random() * 6) + 1;
        // display dice
        document.querySelector('.dice').style.display = 'block';
        // display rolled number img
        document.querySelector('.dice').src = 'dice-' + dice + '.png';

        if (dice !== 1) {
            // roundscore update
            roundScore = roundScore + dice;
            // roundscore img update
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});
document.querySelector(".btn-hold").addEventListener('click', function () {
    // checking on game state
    if (gameState) {
        // adding current score to total score
        scores[activePlayer] += roundScore;
        //display the score
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        //check if there is a winner
        if (scores[activePlayer] >= 200) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner !'
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gameState = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    gameState = true,
        scores = [0, 0],
        roundScore = 0,
        activePlayer = 0;
    // game start defaults 
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('remove');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
}







// var 
//     scores = [0, 0],
//     roundScore=0,
//     activePlayer=0;
//     //   game start defaults 
// document.querySelector('.dice').style.display = 'none';
// document.getElementById('score-0').textContent = 0;
// document.getElementById('score-1').textContent  = 0;
// document.getElementById('current-0').textContent = 0;
// document.getElementById('current-1').textContent = 0;

// document.querySelector('#current-'+activePlayer).textContent = dice;

//////////ternary operator
////////// activePlayer === 0 ? activePlayer = 1 : activeplayer = 0;
// next player turn
//     if(activePlayer == 0){
//         activePlayer = 1;
//     }else{
//         activePlayer = 0;
//     }
//     //Zeroing Score
//     roundScore = 0;
//     //next player scores
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';
//     // player turns visuals
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');
//     // hide dice for new player to start
//     document.querySelector('.dice').style.display = 'none';
// 