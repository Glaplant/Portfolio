import {makeRequest} from './authHelpers.js';
import Auth from './auth.js';

// makeRequest('login', 'POST', {
//     password: 'user2',
//     email: 'user2@email.com'
//     });

const user = new Auth() ;



//I don't understand why this doesn't work.
(function(){
const button = document.getElementById("button");
button.addEventListener('click', () => {user.login(getPosts)});
}());


  //  const form = document.getElementById("login");
  //  form.querySelector("button").addEventListener('click', ()=>{
  //    user.login();
  //  });
 // console.log(button);


 //After logging in it would be nice to show the user something.
 // Create a function to pull all of the posts from the API and call it 
 //after a successful login. (API endpoint would be baseUrl + 'posts'). 
 //To have your function called automatically after login you can pass the function into the login method.
 // It will accept a callback function that will be executed if things go well if you used the code sample above.
async function getPosts(){
  const posts = await makeRequest('posts?=','GET',null,user.jwtToken);
  const ul = document.querySelector("ul");
  const parent = ul;


  while(parent.firstChild){
    parent.removeChild(firstChild); 

  };

  posts.forEach(post =>{
    const li = document.createElement("li");
    console.log(post);
    li.textContent = ` ${post.title} `+ ` ${post.content} `;
    ul.appendChild(li);
  })
  console.log(posts);
const button = document.getElementById("addComment");
console.log(button);
button.addEventListener('click', () => addComment() );

};




async function addComment(){
 
 const title = document.getElementById("title");
 const content = document.getElementById("content");
 const data = {
   title: title.value,
   content: content.value
 };
console.log(user.jwtToken)
 const response = await makeRequest(
 'posts',
 'POST',
 data,
 user.jwtToken
 )
 title.value="";
 content.value="";
 getPosts();

}