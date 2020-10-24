

import{hikeList,imgBasePath} from './modules/hikes.js';






window.addEventListener("load", () => {
  showHikeList();
});






function showHikeList() {
  const hikeListElement = document.querySelector("#hikes");
  this.hikeListElement:hikeListElement.innerHTML = "";
  //renderHikeList(hikeList, hikeListElement);
}



// function renderHikeList(hikes) {
//   hikes.forEach(hike => {
//     hikeListElement.appendChild(renderOneHike(hike));
//   });
// }



function renderOneHike(hikes) {

  const item = document.createElement("li");

  hikes.forEach(hike => {
    hikeListElement.appendChild(hike);

  item.innerHTML =
   ` <h2>${hike.name}</h2>
      <div class=" toggle visible">
        <div class="flexParent">
          <div class="image_hikes">
            <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
          </div>
          <div>
            <div>
              <h3>Distance</h3>
              <p>${hike.distance}</p>
            </div>
            <div>
              <h3>Difficulty</h3>
              <p>${hike.difficulty}</p>
            </div>
          </div>
        </div>
        <div class="directions">${hike.directions}</div>
      </div>`;

  //return item;
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

