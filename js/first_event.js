function showCongratulations(theButtonClicked){
    var result = document.getElementById("result_display");
    document.getElementById("result_display").innerHTML = "<h2>Congratulations, you did it!</h2> <p> You got the page to update!</p>"
    theButtonClicked.innerHTML = "Click me again!"

    if(result.style.display === "none"){
        result.style.display = "block";
    }
    else{
        result.style.display = "none";

    }
}