

import{hikeList,hikeDom} from '../lib/hikes.js';

// const ulParent () {

window.addEventListener("load", () => {
  showHikeList();
});

  
function showHikeList() {
  const hikeListElement = document.getElementById("hikes");
  hikeListElement.innerHTML = "";
  renderHikeList(hikeList, hikeListElement);
}

function renderHikeList(hikes, parent) {
  
  hikeDom(hikes,parent);
  const ul = document.querySelector("ul");
  ul.addEventListener('click',expand);
}

function expand(event){
    const element = event.target.nextElementSibling;
    console.log(element);
    element.classList.toggle("visible");

  }

