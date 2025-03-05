/* ------------------------------ TASK 5 -----------------------------------
Parašykite TS funkciją, kuri atlieka žirklės/popierius/akmuo žaidimo patikrinimą ir grąžina atsakymą.
Funkcija priima du tekstus ir grąžina tekstą.

Pvz.:
  "scissors", "paper" --> "Player 1 won!"
  "scissors", "rock" --> "Player 2 won!"
  "paper", "paper" --> "Draw!"
-------------------------------------------------------------------------- */
var zaidimas = function (player1, player2) {
    if (player1 === player2) {
        return 'Draw!';
    }
    else if ((player1 === 'scissors' && player2 === 'paper') || (player1 === 'paper' && player2 === 'rock') || (player1 === 'rock' && player2 === 'scissors')) {
        return 'Player 1 won!';
    }
    else {
        return 'Player 2 won!';
    }
};
