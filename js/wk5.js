

import{hikeList,imgBasePath,hikeDom} from './modules/hikes.js';


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
  hikes.forEach(hike => {
    parent.appendChild(renderOneHike(hike));
  });
}


function renderOneHike(hike) {
  const item = document.createElement("li");

  item.innerHTML = hikeDom(hike);

  return item;
}



const ul = document.querySelector("ul");
ul.addEventListener('click',expand);

//
function expand(event){
   const element = event.target.nextElementSibling;
  //const element = document.querySelector('.toggle');
  //const sibling = element.nextSibling;
 element.classList.toggle("visible");
// event.target.nextSibling.classList.toggle("visible");
  console.log(element);
  }

