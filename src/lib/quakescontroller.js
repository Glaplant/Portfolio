import { getLocation } from './utilities.js';
import Quake from './quake.js';
import QuakesView from './quakesview.js';

// Quake controller
export default class QuakesController {
  constructor(parent, position = null) {
    this.parent = parent;

    // sometimes the DOM won't exist/
    //be ready when the Class gets instantiated,
    //so we will set this later in the init()

    this.parentElement = null;

    // let's give ourselves the option of using a
    //location other than the current location by passing it in.

    this.position = position || {
      lat: 0,
      lon: 0
    };

    // this is how our controller will know about
    //the model and view...we add them right 
    //into the class as members.

    this.quakes = new Quake();
    this.quakesView = new QuakesView();
  }


  async init() {

    // use this as a place to grab the element identified by this.parent, 
    //do the initial call of this.initPos(), 
    //and display some quakes
    //by calling this.getQuakesByRadius()
    this.parent="ul";
    this.parentElement = document.querySelector(this.parent);
    await this.initPos();
    this.getQuakesByRadius(300);
  }


  async initPos() {
    // if a position has not been set
    if (this.position.lat === 0) {
      try {
        // try to get the position using getLocation()
        const promise = await getLocation()
        //console.log(promise)
        .then(response =>{
        const lat = response.coords.latitude;
        const long = response.coords.longitude;
       // console.log(long);
        this.position.lat = lat;
       // console.log(this.position.lat);
        this.position.lon = long;
        //console.log(this.position.lon);
        });
    }
        // if we get the location back then set the 
        //latitude and longitude into this.position
        
       catch (err) {
        console.log(err);
      }
    }
}

  async getQuakesByRadius(radius = 300) {

    // this method provides the glue between the model and view. 
    //Notice it first goes out and requests the appropriate data from the model, 
    //then it passes it to the view to be rendered.


    //set loading message
   
    this.parentElement.innerHTML = '<li> Loading...</li>';

    // get the list of quakes in the specified radius of the location

    const quakeList = await this.quakes.getEarthQuakesByRadius(
      this.position,
      300
    );
    console.log(quakeList);


    // render the list to html

    this.quakesView.renderQuakeList(quakeList, this.parentElement);

    // add a listener to the new list of
    // quakes to allow drill down in to the 
    //details

    this.parentElement.addEventListener('touchend', e => {
      this.getQuakeDetails(e.target.dataset.id);
    });
  }


  

 // get the details for the quakeId provided from the model,
//then send them to the view to be displayed


   
  }
// }