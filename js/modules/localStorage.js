// setItem(): Add key and value to localStorage
// getItem(): Retrieve a value by the key from localStorage
// removeItem(): Remove an item by key from localStorage

//retrive input value 
function getObject(objName){
const taskObject = JSON.parse(localStorage.getItem(objName));
return taskObject;
}


function newTaskName(newTask){
const taskName = localStorage.getItem(newTask);
return taskName;
}


function newColor (taskObject){
let color = taskObject.color;
if(color === "green"){
  color = "red";
}
else{
  color = "green"
}
return color;
}



function completion(taskObject){
  let complete = taskObject.completed;
  if(complete === "no"){
    complete = "yes";
  }
  else{
    complete = "no"
  }
  return complete;
  }




  // function getStorage(){

    
function getStorage(){


  //Gets keys from local 
  let keyArray = Object.keys(localStorage);
 //console.log(keyArray);

 //Passes keys into map funtion to iterate through objects in local 
  const storage = keyArray.map((key) =>
  JSON.parse(localStorage.getItem(key)));
  return storage;
}

// console.log(getStorage());

 

   

// let key = Object.keys(localStorage);
// console.log(key);
    
// }





export {getObject,completion,newColor,newTaskName,getStorage}