var colors = [];
var pickedColor;
var numOfSq = 6;
var squares = document.querySelectorAll('.square');
var modeBtn = document.querySelectorAll(".mode");
var colorDisplay = document.getElementById('color-display');
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var h1 = document.querySelector('h1');

init();
function init(){
    //add event listener to buttons
    for(var i = 0; i < modeBtn.length; i++){
        modeBtn[i].addEventListener("click", function(){
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSq = 3: numOfSq = 6;
            reset();

        });
    }
    
    //adding event listener to squares
    for(var i = 0; i < squares.length; i++){
    //add click listeners to square
        squares[i].addEventListener("click", function() {
        //grab color of clicked square
             var clickedColor = this.style.background;
        //compare the picked color with clicked color
            if(clickedColor === pickedColor){
                resetButton.textContent = "Play Again?";
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }

        });
    }
    reset();
}




function reset(){
    //generate all new colors
    colors = generateRandomColors(numOfSq);
    //pick a new random color
    pickedColor = pickedColors();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of square
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        }
        else{
            squares[i].style.display = "none";
        }
    }
    resetButton.textContent = "New Game";
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
}

/*easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numOfSq = 3
    colors = generateRandomColors(numOfSq);
    pickedColor = pickedColors();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
        
    }
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
})
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSq = 6
    colors = generateRandomColors(numOfSq);
    pickedColor = pickedColors();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
})*/


resetButton.addEventListener("click", function() {
    reset();    
}) 

colorDisplay.textContent = pickedColor;



function changeColors(color){
    //loop through all squares
    for(var j = 0; j < squares.length; j++){
        //change each color to match color
        squares[j].style.background = color;
    }
}

function pickedColors(){
    var random  = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //retrun the array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 - 255
     var r = Math.floor(Math.random()*256);
    //pick a "green" from 0 - 255
     var g = Math.floor(Math.random()*256);
    //pick a "blue" from 0 - 255
     var b = Math.floor(Math.random()*256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
}