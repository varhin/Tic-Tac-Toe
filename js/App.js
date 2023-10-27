function App(){

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
    const [board, setBoard] = React.useState(['', '', '','', '', '','', '', '']);
    const [turn, setTurn] = React.useState('X');
    const [win, setWin] = React.useState(null)

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
        // let idx = squares.findIndex(function(square) {
        // return square === event.target;
        // });
        
        let idx = event.target.id
        let newBoard = [...board]
        newBoard[idx] = turn;
        setBoard(newBoard)
        let nextTurn = turn === 'X' ? 'O' : 'X';
        setTurn(nextTurn)
        let whoWon = getWinner();
        setWin(whoWon)
    };

    function Message(){

        let message = win === 'T' 
        ? `That's a tie, queen!` 
        : win ? `${win} wins the game!` 
        : `It's ${turn}'s turn!`;
        
        return <h1>{message}</h1>

    }


    return(
        <div>
            <h1>Tic-Tac-Toe</h1>
            {/* <h2>It's {turn}'s turn!</h2> */}
            <Message/>

            <div className="flex-container flex-column">
                <div className="flex-container flex-wrap" id="board" onClick=
                   {handleTurn}>
                    
                    {
                        board.map((data, index)=>{
                            return (
                            <div key={index} id={index} className="square">{data}</div>
                            )
                        })
                    }
                </div>
        {/* <!-- A reset button because users are going to want to play round after round of your glorious game without ever refreshing the browser! --> */}
        <button id="reset-button">Reset</button>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, root)

