


//comment class and constructor function
class Comment {
constructor(name,comment){
    this.hikeName = name ;
    this.date = dateNew() ;
    this.hikeComment = comment;
    this.type = "hike" ;
    
}
}

//Constructor Function for buttons
function Button (selector,callBack){
    const element = document.getElementById(selector);
   this.action = element.addEventListener('click',callBack);
   
   }


const submit = new Button("commentClick",addComment);

//Uploads to local storage
function addComment(){
    //Gets Comment Obj 
    const comment = commentObj();
    //Puts comment obj in localstorage as json string
    localStorage.setItem(comment.hikeName,JSON.stringify(comment));
  
    }


//Creates new Comment Obj
function commentObj(){
    //gets user input from text Area
    const comment = commentText();
    //gets hike name from hike drop down
    const name = hikeName();
    //Passess input values to comment constructor function, createing a new comment
    const newComment = new Comment(name,comment);
    //Returns new comment obj
    return newComment;
}


//Retirieves user input of textArea/ new comment
function commentText(){
    const commentInput = document.getElementById("commentInput").value;
    return commentInput;
}

//Retrieves hikeName value from drop down
function hikeName(){
    const hikeInput = document.querySelector(".hikeDrop").value; 
    return hikeInput;  

}


// Creates date string for comment obj
 function dateNew(){

    const months= [ "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
 

    // const year = getFullYear();
   //creates new Date Obj
    const d = new Date();
    //Date Obj Method for Month/ Returns (0-11)
    const month = d.getMonth();
    //Date Obj Method for day of the month / Returns (1-31)
    const day = d.getDate();
    //Date Obj Method for week day/ returns number 0-6
    // const weekDay = d.getDay();
    //Date Obj Method Returns current year
    const year = d.getFullYear();
    //Uses month() return to retrive Month Text from Array
    const monthText = months[month];
    //Uses weekDay return to retrieve Text from Array
    // const dayText = days[weekDay];
    //Concatanates nad Builds String of Month Day and Year
    const dateString =`${monthText}. ${day}, ${year}`;
    return dateString;

}
// })();

function getStorage(){
    //Gets keys from local 
    let keyArray = Object.keys(localStorage);
    const storage = keyArray.map((key) =>
    JSON.parse(localStorage.getItem(key)));
    // console.log(storage);
    return storage;
  };

(function(){
//   function filterStorage(){
      const storage = getStorage();
      storage.filter( hikes => (hikes.type == "hike"));
   console.log(hikes);

      
  }());


// function commentDom(comment){

  
//     const commentsContainer = document.createElement(div);
//     const ul = document.createElement(ul);
//     const hikeName = document.createElement(li);
//     hikeName.contentText= comment.name;
//     const date = document.createElement(li);
//     date.contentText= comment.date;
//     const commentsBox = document.createElement(div);
//     const comment = document.createElement(p);
//     comment.contentText= comment.text;
    
    
 export{commentObj};

// }

