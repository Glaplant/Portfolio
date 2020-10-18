

import{hikeList,imgBasePath} from './modules/hikes.js';




window.addEventListener("load", () => {
  showHikeList();
});






function showHikeList() {
  const hikeListElement = document.querySelector("#hikes");
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

  item.innerHTML = ` <h2>${hike.name}</h2>
  <div class="toggle visible">
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

  return item;
}

// // document.addEventListener("click",toggle);


// const toggle = Array.from(document.getElementsByClassName("toggle"));
// toggle.forEach(console.log(toggle));
// // toggle.forEach(addEventListener("click",visible));

// // function visible(){
// //   console.log("click");
// // }
