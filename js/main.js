/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));


/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/

function getWinner() {
    let winner = null;
    winningCombos.forEach((combo, index) => {
    if (board[combo[0]] && board[combo[0]] === board[combo[1]]
         && board[combo[0]] === board[combo[2]]) {
    winner = board[combo[0]];
    }
    });
    
    return winner ? winner : board.includes('') ? null : 'T';
};


function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });

    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';

    win = getWinner();

    render();
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];

    render();
};


function render() {
    board.forEach(function(mark, index){
    //this sets the text content of the square of the same position to the mark on the board. 
    squares[index].textContent = mark;
    });

    //message to let user know its their turn
    messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
 }; 
 
 
//be sure to call the init function!
init();