"use strict";


let hikeData = ("https://glaplant.github.io/Portfolio/src/lib/hikes.json");



fetch(hikeData)
// console.log(hikeData)
.then(function(resp){
  return resp.json();
})
.then(function(data){

  const hikes = data.hikes;
  hikeDom(hikes);
})
 
  

  
//on load grab the array and insert it into the page

function hikeDom(hikes){
  const parent = document.getElementById("hikes");
  parent.innerHTML = "";
  hikes.forEach(hike => {

     


const imgBasePath = "//byui-cit.github.io/cit261/examples/";
// const hikeHtml =

const li = document.createElement("li");

const h2 = document.createElement("h2");


const a = document.createElement("a");
// a.href="#focus";
a.textContent= hike.name;



const div1 = document.createElement("div");
div1.classList.add("toggle","visible");

const div2 = document.createElement("div");
div2.classList.add("flexParent");

const div3 = document.createElement("div");
div3.classList.add("imageHikes");

const img = document.createElement("img");

img.src = `${imgBasePath}${hike.imgSrc}`;
img.alt = hike.imgAlt ;

const div4 = document.createElement("div");
div4.classList.add("flexRow");

const div5 = document.createElement("div");


const distance = document.createElement("h3");
distance.classList.add("stopEvent");
distance.textContent = "Distance";
distance.setAttribute("id","focus");

const p1 = document.createElement("p");
p1.textContent = hike.distance;

const difficulty = document.createElement("h3");
difficulty.textContent = "Difficulty";
difficulty.classList.add("stopEvent");


const p2 = document.createElement("p");
p2.textContent = hike.difficulty;

const div6 = document.createElement("div");



const div7 = document.createElement("div");
div7.textContent = hike.directions;
div7.classList.add("directions");


const comments = document.createElement("div");
comments.setAttribute("id","commentContainer");


parent.appendChild(li);
li.appendChild(h2);
h2.appendChild(a);
li.appendChild(div1);
div1.appendChild(div2);
  div2.appendChild(div3);
  div2.appendChild(div4);
    div3.appendChild(img);
    div4.appendChild(div5);
    div4.appendChild(div6);
        div5.appendChild(distance);
        div5.appendChild(p1);
        div6.appendChild(difficulty);
        div6.appendChild(p2);
div1.appendChild(div7);
div1.appendChild(comments);

});
}

  export {hikeDom};



  