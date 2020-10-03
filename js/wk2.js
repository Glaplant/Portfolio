




/*Buttons*/



function addButton() {

    let name = document.getElementsByName("button")[0].value;
    let number = document.querySelector("#answerOne").innerHTML;
    number = parseFloat(number);
    let value = secondInput();
    let answer = calculate(name,number,value);
    document.querySelector('#answerTwo').innerHTML = answer
   
   
    
        
}




 function subButton(){
    let name = document.getElementsByName("button")[1].value;
    let number = document.querySelector("#answerOne").innerHTML;
    parseFloat(number);
    let value = secondInput();
    let answer = calculate(name,number,value);
    document.querySelector('#answerTwo').innerHTML = answer
   
    
 }


function mulButton(){
    let name = document.getElementsByName("button")[2].value;
    let number = document.querySelector("#answerOne").innerHTML;
    parseFloat(number);
    let value = secondInput();
    let answer = calculate(name,number,value);
    document.querySelector('#answerTwo').innerHTML = answer
}


function divButton(){
    let name = document.getElementsByName("button")[3].value;
    let number = document.querySelector("#answerOne").innerHTML;
    Number(number);
    let value = secondInput();
    let answer = calculate(name,number,value);
    document.querySelector('#answerTwo').innerHTML = answer
}



/*Inputs*/



function firstInput(){
    let entry;
    let empty = false;
    let valid = true;
    let sum = 0;
    
    
    entry = document.querySelector("#numOne").value;
    empty = emptyInput(entry,empty);

    if(empty){
        document.querySelector('#answerOne').innerHTML = "<p> Please enter a valid number</p>" 
        }

    valid = validateNumber(entry,valid);

    if(!valid){
        document.querySelector('#answerOne').innerHTML = "<p> Please enter a valid number</p>" 
        }
        else{
            Number(entry);
        }

    sum = mathLoop(entry);
    

   if(sum){document.querySelector('#answerOne').innerHTML = sum
    
    }

    

    return sum;


    
    
}

function secondInput(){

    let numberTwo = document.querySelector("#numTwo").value;
    let floatNumber = parseFloat(numberTwo);
    let empty = emptyInput(floatNumber);
    if(empty){
        document.querySelector('#answerTwo').innerHTML = "<p> Please enter a valid number</p>" 
        }
    let valid = validateNumber(floatNumber);
    if(!valid){
        document.querySelector('#answerTwo').innerHTML = "<p> Please enter a valid number</p>" 
        }
        
    return floatNumber;
   
    
   
   
    
}



/*validation*/



function emptyInput(entry){
let value = parseFloat(entry);
let empty = false;

 if(Number.isNaN(value)){
    empty = true;
    }
    return empty;
}


function validateNumber(entry){
let value = parseFloat(entry);
let valid = true;
    if (Number.isNaN (value) ){
    valid = false;
    } 
  
    return valid;
}
// }



/*Calculation*/

const mathLoop = (entry)=>{
let number = parseFloat(entry);
let sum = 0;


    for(i=0;i<number;i++){

        sum += i+1;
    }
 return sum;
    
}



const calculate = function(name, number,value){


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