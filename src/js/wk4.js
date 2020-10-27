

(function(){
const squareArray = Array.from(document.querySelectorAll(".ticTacToe > div"));
squareArray.forEach( arrayItem =>{arrayItem.addEventListener("click", clickFunction)});
}());




onclick = function() {
   
    let player = document.querySelector("#turnDiv").innerHTML;
    if (player === "Your Move Player 1")
    {
        document.querySelector('#turnDiv').innerHTML = "Your Move Player 2";
    }
  else  {
        document.querySelector('#turnDiv').innerHTML = "Your Move Player 1";
    }
    

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

   //forEach( document.querySelectorAll(".ticTacToe>div").innerHTML);
    
}


function reset(){
   window.location.reload();

}



