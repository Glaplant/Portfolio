
//  A comment should consist of at least
//  the name of the hike it is for, 
// a date, and 
// the actual text of the comment.
//   You will also need a comment type to use as a key for when we store these to local storage.

// const { getStorage } = require("./localStorage");


// function commentInput{

// }


// class Comment{

// constructor(){
//     this.name = name ;
//     this.date = getDate() ;
//     this.time = Date.now() ;
//     this.comment = comment;
//     this.type = type;
// }

// }

// let newComment = new Comment();



function dateNew(){

    const months= [ "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
 

    const year = getFullYear();
    const month = getMonth();
    const date = getDate();

    return `${days.date}${months.month}${year}`;

}

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
    
    
export{dateNew};

// }