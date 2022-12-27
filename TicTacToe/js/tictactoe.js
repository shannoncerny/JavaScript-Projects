//keeps track of whose turn it is
let activePlayer= 'X';
//this array stores array of moves, used to determine win conditions
let selectedSquares = [];

//function is for placing an x or o in a square
function placeXorO(squareNumber) {
    //this condition ensures a square hasnt been selected already
    //.some() method is used to check each element of the selectSquare array to see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))){
        //this variable retrieves the html element id that was clicked
        let select = document.getElementById(squareNumber);
        //checks to see whose turn it is
        if (activePlayer === 'X') {
            //if activePlayer is X, the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/new-x.png")';
            //activePlayer may only be 'X' or 'O', if not 'x', must be 'o'
        } else {
            select.style.backgroundImage = 'url("images/new-o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //calls a function to check for any win conditions
        checkWinConditions();
        //this condition is for changing active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        //function plays placement sound
        audio('./media/newplace.wav');
        //checks to see if it's computer's turn
        if (activePlayer === 'O') {
            //disables clicking for computers turn
            disableClick();
            //waits 1 second before the computer places images and enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //needed for computersTurn() to work
        return true;
    }
    //results is random square being selected by computer
    function computersTurn() {
        //boolean needed for while loop
        let success = false;
        //variables stores random number 0-8
        let pickASquare;
        //allows while loop to keep trying if a square is selected already
        while (!success) {
            //random number 0-8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //if random number evaluated is true, the square hasn't been selected yet
            if (placeXorO(pickASquare)) {
                placeXorO(pickASquare);
                //changes boolean and ends loop
                success = true;
            };
        }
    }
}

//this function parses the selectedSquares array to search for win conditions
//drawLine() is called to draw a line on the screen if the condition is met
function checkWinConditions() {
    if (arrayIncludes('0X','1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X','4X','5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X','7X','8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X','3X','6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X','4X','7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X','5X','8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X','4X','2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X','4X','8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O','1O','2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O','4O','5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O','7O','8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O','3O','6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O','4O','7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O','5O','8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O','4O','2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O','4O','8O')) { drawWinLine(100, 100, 520, 520) }
    //checks for a tie, if none of the above conditions are met and 9 squares are selected, the code executes
    else if (selectedSquares.length >=9) {
        audio('./media/newtie/m4a');
        //sets a .3 second timer before the resetGame() is called
        setTimeout(function () { resetGame(); }, 500);
    }

    //checks if an array includes 3 strings. used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //3 variables used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if all 3 variables are included in array then true is returned and else if conditions executes drawLine()
        if (a === true && b === true && c === true) { return true; }
    }
}

//makes body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = 'none';
    //makes body clickable again after 1 second
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//takes a string paramet of the path set earlier for placement sound('./media/place.mp3')
function audio(audioURL) {
    //create a new audio object and pass the path as parameter
    let audio = new Audio(audioURL);
    //plays audio sound
    audio.play();
}

//utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //accesses html canvas element
    const canvas = document.getElementById('win-lines');
    //gives access to methods/properties to use on canvas
    const c = canvas.getContext('2d');
    //indicates where start of line x axis is
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2
        //this variable stores temporary x axis data
        x = x1,
        //this variable stores temporary y axis data
        y = y1;

    //interacts with canvas
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //clears content from last loop iteration
        c.clearRect(0,0,608,608);
        //starts a new path
        c.beginPath();
        //moves to starting point in line
        c.moveTo(x1, y1);
        //indicates the end point in line
        c.lineTo(x,y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        //draws everything laid out above
        c.stroke();
        //checks if endpoints have been reached
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; } //adds 10 to previous end x endpoint
            if (y < y2) { y += 10; } //adds 10 to previous end y endpoint
            //necessary for 6,4,2 win conditions
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //clears canvas after win line is drawn
    function clear() {
        //starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        //clears canvas
        c.clearRect(0,0,608,608);
        //stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    //disallows clicking while win sound is playing
    disableClick();
    audio('./media/newwinGame.wav');
    //calls animation loop
    animateLineDrawing();
    //waits 1 sec, clears canvas, resets game, then allowa clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//resets game in the event of a tie or win
function resetGame(){
    //this for loop iterates through each html square element
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        //removes elements backgroundImage
        square.style.backgroundImage = '';
    }
    //resets array so its empty
    selectedSquares = [];
}