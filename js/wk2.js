




/*Buttons*/

function addButton(){
    let name = document.getElementsByName("button")[0].value;
    let number = firstInput();
    let value = secondInput();
    let answer = calculate(name,number,value);
    document.querySelector('#answerTwo').innerHTML = answer
        
}


 function subButton(){
    let name = document.getElementsByName("button")[1].value;
    let number = firstInput();
    let value = secondInput();
    let answer = calculate(name,number,value);
    document.querySelector('#answerTwo').innerHTML = answer
   
    
 }


function mulButton(){
    let name = document.getElementsByName("button")[2].value;
    let number = firstInput();
    let value = secondInput();
    let answer = calculate(name,number,value);
    document.querySelector('#answerTwo').innerHTML = answer
}


function divButton(){
    let name = document.getElementsByName("button")[3].value;
    let number = firstInput();
    let value = secondInput();
    let answer = calculate(name,number,value);
    document.querySelector('#answerTwo').innerHTML = answer
}



/*Inputs*/

function firstInput(){
    let numberOne;
    let floatNumber;
    let empty = true;
    
   
    numberOne = document.querySelector("#numOne").value;
    floatNumber = parseFloat(numberOne);
    empty = emptyInput(floatNumber);
    if(empty){
        document.querySelector('.error').innerHTML = "<p> Please enter a valid number</p>" 
        }

    let valid = validateNumber(floatNumber);

    if(!valid){
        document.querySelector('.error').innerHTML = "<p> Please enter a valid number</p>" 
        }

    sum = mathLoop(floatNumber);
    

   if(sum){document.querySelector('#answerOne').innerHTML = sum
    
    }

    return sum;


    
    
}

function secondInput(){

    let numberTwo = document.querySelector("#numTwo").value;
    let floatNumber = parseFloat(numberTwo);
    let empty = emptyInput(floatNumber);
    if(empty){
        document.querySelector('.error').innerHTML = "<p> Please enter a valid number</p>" 
        }
    let valid = validateNumber(floatNumber);
    if(!valid){
        document.querySelector('.error').innerHTML = "<p> Please enter a valid number</p>" 
        }
        
    return floatNumber;
   
    
   
   
    
}



/*validation*/



function emptyInput(floatNumber){
let empty = floatNumber;

    if(empty === null ){
    return false;
    }
}


function validateNumber(floatNumber){
    let valid = floatNumber;
  
    if (isNaN (valid) ){
    return false;
    } 
    else{
    return true;
    }
}
// }



/*Calculation*/

function mathLoop(floatNumber){
let number = floatNumber;
let sum = 0;


    for(i=0;i<number;i++){

        sum += i+1;
    }
 return sum;
    
}



function calculate(name, number,value){


switch(name){

        case "add":
        let sum = number + value;
        return sum;

        case "subtract":
        let difference = number - value;
        return difference;

        case "multiply":
        let product = number * value;
        return product;

        case "divide":
        let quotient = number / value;
        return quotient;

        
    }
 }