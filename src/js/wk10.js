import { getJSON, getLocation } from '../lib/utilities.js';
import QuakesController from '../lib/quakescontroller.js';



const controller = new QuakesController();
const response = controller.init();
console.log(response);

const radius = document.getElementById("radius");
console.log(radius);
radius.addEventListener("click",getRadius);

function getRadius(){
const input = document.getElementById("inputVal");
console.log(input);
const radius= input.value;
console.log(radius);
}
// (function(){

// const baseUrl ="https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02";

// const promise = getLocation()
// .then(response =>{
//     const lat = response.coords.latitude;
//     const long = response.coords.longitude;
//     //console.log(lat);
//    // console.log(long);
//     const coords = `&latitude=${lat}&longitude=${long}&maxradiuskm=100`;
//     const url = baseUrl + coords;
//     console.log(url);
//     getJSON(url);
// })

// }());


