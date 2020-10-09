
// const click1 = document.getElementById("item1");
// const click2 = document.getElementById("item2");
// const click3 = document.getElementById("item3");
// const click4 = document.getElementById("item4");
// const click5 = document.getElementById("item5");
// const click6 = document.getElementById("item6");
// const click7 = document.getElementById("item7");
// const click8 = document.getElementById("item8");
// const click9 = document.getElementById("item9");

const squareArray = Array.from(document.querySelectorAll(".ticTacToe > div"));
console.log(squareArray);

let count = 0;

const screen = document.querySelector('.container');

//let displayCount = document.querySelector('#turnDiv');

squareArray.forEach( arrayItem =>{arrayItem.addEventListener("click", clickFunction)});

console.log(squareArray);




onclick = function() {
    // let answer = "";    
    // let output=";
    let player = document.querySelector("#turnDiv").innerHTML;
    if (player === "Your Move Player 1")
    {
        document.querySelector('#turnDiv').innerHTML = "Your Move Player 2";
    }
  else  {
        document.querySelector('#turnDiv').innerHTML = "Your Move Player 1";
    }
    
// output = clickFunction();

// document.querySelector(this.div).innerHTML = output;

}



function clickFunction(event,answer) {

let player = document.querySelector("#turnDiv").innerHTML;

let currentSquare = event.target;
    
    if (player === "Your Move Player 1")
    {
   answer = "X";
  
    }
    else if (player === "Your Move Player 2" ){
    answer = "O" 
    }
    else{
    answer = "X"
    }
    currentSquare.innerHTML = answer;
}

