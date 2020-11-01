


import{getObject,completion,newColor,newTaskName,getStorage} from '../lib/localStorage.js';



//Button constructor function
function Button (selector,callBack){
  const element = document.querySelector(selector);
 this.action = element.addEventListener('click',callBack);
 
 }

 //Task constructor function
 function Task (name){
   this.name = name;
   this.completed = "no";
   this.color = "green";
 }



 //Button Objects


const taskButton = new Button(".fa-plus-circle",createTask);

//Makes Tasks Clickable
const task = new Button(".taskList",toggle);
const sort = new Button(".sort",storageObj);
// const x = new Button("fas-time",remove);


function taskText(){
  const taskValue = document.querySelector(".taskInput").value;
  return taskValue;

}


function testInput(task){
   //Retrieves input and puts into local storage
   const taskName = task;
  let answer = true;
   //Tests for empty input
   if (!taskName){
     answer = false

   } 

 return answer;
}


function createTask(){
    
    const taskName = taskText();
    const test = testInput(taskName);
 

      // const errorHtml = document.querySelector(".error");
      // if (!errorHtml == null){
      //   errorHtml.remove();
      // }

      const task = taskObj(taskName);
      if(test){addLocal(task)};
      if(test){addDOM(task)};
    }



    //Creates new Task obj/ clears input
    function taskObj(taskName){
    const newTask = new Task(taskName);
    document.querySelector(".taskInput").value = ''; 
    return newTask;
      }

    //Puts new Task  into local storage
    function addLocal(task){
    localStorage.setItem(task.name,JSON.stringify(task));
    }
 

    //Outputs new Task to Dom
    function addDOM(task){
    const taskObj = task;
    const li = document.createElement("li");
    const div = document.querySelector("ul");
    const iconX = document.createElement("i");

    if(taskObj.color == "red"){
      li.classList.add("addedTask", "red")
    }
    else{
      li.classList.add("addedTask");
    }
    iconX.classList.add("fas","fa-times");
    li.textContent= taskObj.name;
    li.appendChild(iconX);
    div.appendChild(li);
    }


function toggle(event){

const objName = event.target.textContent;
const taskObject = getObject(objName);
taskObject.color = newColor(taskObject);
taskObject.completed = completion(taskObject);
event.target.classList.toggle("red");
localStorage.setItem(objName,JSON.stringify(taskObject));
}


// function colorControl(taskName){
//   const storage = getStorage();
//   storage.forEach(color =>{
//     if(color.color == "red"){
//       // classList.add("red")
//       console.log(color.color)}
//         else{
//           // classList.remove(red);
//           console.log(color.color)
//         }
//       }
//     }
  






function storageObj(event){

  let target = event.target.innerHTML;
  if(target === "Active"){
    const storage = getStorage();
    const active = storage.filter( green => green.color == "green");
    let taskParent = document.querySelector(".taskList");
    removeAllChildNodes(taskParent);
    active.forEach(task => addDOM(task));

  }
  else if(target === "Completed"){

    const storage = getStorage();
    const complete = storage.filter( red => red.color == "red");
    //console.log(complete);
    let taskParent = document.querySelector(".taskList");
    removeAllChildNodes(taskParent);
    complete.forEach(task => addDOM(task));
    
    

  }
  else{

    const storage = getStorage();
    let taskParent = document.querySelector(".taskList");
    removeAllChildNodes(taskParent);
    storage.forEach(task => addDOM(task));
    

  }


}

// function remove(event){
//   let element = event.target;
//   element.remove();
// }

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}