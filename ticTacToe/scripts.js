//=============GLOBALS===========
//init game as player 1's turn
let whosTurn = 1;
// Make an array for both players and push each new squares
// onto the appropriate array
let player1Squares = [];
let player2Sqaures = [];

// Array of all winning combos
const winningCombos = [
    ['A1, B1, C1'], //row 1
    ['A2, B2, C2'], //row 2
    ['A3, B3, C3'], //row 3
    ['A1, A2, A3'], //col 1
    ['B1, B2, B3'], //col 2
    ['C1, C2, C3'], //col 3
    ['A1, B2, C3'], //diag 1
    ['A3, B2, C1'], //diag 2
]


// 1. Set up board -- CHECK
// 2. User should be able to click on a button
// when the click happens, the square should have 
// that players mark (X or O) -- CHECK
// 3. If it's X's turn, put an X in, otherwise put an 0 in -- CHECK
// 4. In order to accomplish 3, we need to keep track of who's turn it is
// After X goes, it becomes 0's turn, and vice versa -- CHECK
// 5. keep other player from taking a square -- CHECK
// 6. See if someone won! if so, congratulate them
// 7. Stop the game if someone won, otherwise let it keep going

// squares is an array with 9 objects in it
// each element is an HTML button element
const squares = document.getElementsByClassName('square');
// const squares = document.getElementsByTagName('button');
// console.log(squares);

for(let i = 0; i < squares.length; i++){
    // console.log(squares[i]);
    // not that we have all the squares individually (sqaures[i]),
    // we can add an event listener to each one
    // to add eventListener;
    // 1. what to listen to
    // 2. add the method (addEventListener)
    // 3. first arg: what event to listen for
    // 4. second arg: function to run if that even happens
    squares[i].addEventListener('click',function(event){
        // EVERY JS event, will give you the event page
        // console.log(event);
        console.dir(this); // check to see if the square is taken...
        if(this.innerHTML === "-"){
            // it's not taken, so see who's turn it is
            if(whosTurn === 1){
                // its player 1, put an X, ang give
                // control to O
                this.innerHTML = "X"; // Update the DOM
                whosTurn = 2; // UPDATE the JS
                // Update the DOM 
                document.getElementById('message').innerHTML = "It's O's turn";
                player1Squares.push(this.id);
                checkWin(player1Squares, 1);
            }else {
                this.innerHTML = "O";
                whosTurn = 1;
                document.getElementById('message').innerHTML = "It's X's turn";
                player2Sqaures.push(this.id);
                checkWin(player2Squares, 2);
            }
        }else{
            document.getElementById('message').innerHTML = "Sorry, that sqaure is taken."
        }
        console.log(player1Squares);
        console.log(player2Sqaures);
        
    })
}   

function checkWin(playerSquares, whoMarked){
    console.log("Checking to see who won...")
    // console.log(playerSquares);
    // console.log(whoMarked);
    // we know who just went (whoMarked)
    // and we know what squares they have (playerSquares)
    // Outer Loop - Check each winning combination
    for(let i = 0; i < winningCombos.length; i++){
        // keep track of how many sqaures are in THIS combo
        let squareCount = 0;
        // Inner loop - Check each sqaure inside of THIS winning combo
        // winningCombos[i] = the winningCombo we are on (3 sqaures)
        for(let j = 0; j < winningCombos[i].length; j++){
            // winningCombos[i][j] = the square in the winningCombo
            const winningSquare = winningCombos[i][j];
            if(playerSquares.includes(winningSquare)){
                // player has this sqaure!!
                squareCount++;

            }
        }
        if(squareCount === 3){
            console.log('Player won!');
            console.log(winningCombos[i]);
        }
    }
}