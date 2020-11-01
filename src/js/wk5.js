
import{commentObj} from '../lib/comments.js';
import{hikeDom} from '../lib/hikes.js';


(function(){
// function renderHikeList() {
  const ul = document.querySelector("ul");
  ul.addEventListener('click',expand);
  hikeDom();
 
})();

function expand(event){
    const element = event.target.nextElementSibling;
    // console.log(element);
    element.classList.toggle("visible");

  }

