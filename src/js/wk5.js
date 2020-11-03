
import{commentObj} from '../lib/comments.js';
import{hikeDom} from '../lib/hikes.js';


(function(){
// function renderHikeList() {
  


  const observer = new MutationObserver(function(mutations){
    mutations.forEach( function(mutation) {
       if(mutation.addedNodes){
         const a = Array.from(document.getElementsByClassName("eventClick"));
         a.forEach( hike => hike.addEventListener("click",expand))
       }
    })

  })
  const ul = document.getElementById("hikes");
  observer.observe(ul, {childList: true});

 
 
})();

function expand(event){
    const element = event.target.nextElementSibling;
   // console.log(element);
   //const target = document.querySelector(`${element} div`);
   element.classList.toggle("visible");
   // element.classList.toggle("visible");


  }


 



  

