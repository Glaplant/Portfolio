export function carousel(){
    // All code will go in here. We've renamed 'document' to 'd'.

const d = document;

const itemClassName = "slide";
const items = d.getElementsByClassName(itemClassName);
console.log(items);
const totalItems = items.length;
console.log(totalItems);
let slide = 0;
let moving = true;
  
  
  // We need to initiate the carousel by finding the initial 
//item and applying the .prev and .next class to its adjacent items.

// const initial = d.querySelector(".slide.initial");
// console.log(initial);

function setInitialClasses(){

    
    items[totalItems-1].classList.add("prev");
    items[0].classList.add("active");
    items[1].classList.add("next");
}
// Then we want to add click events to our navigation buttons.

function setClicks(){

const prev = d.getElementsByClassName('prev_button')[0];
const next = d.getElementsByClassName('next_button')[0];

prev.addEventListener("click",movePrev);
next.addEventListener("click",moveNext);
}

function disableInteraction() {
    // Set 'moving' to true for the same duration as our transition.
    // (0.5s = 500ms)
    
    moving = true;
    // setTimeout runs its function once after the given time
    setTimeout(function(){
      moving = false
    }, 500);
  }

  
  function moveCarouselTo(slide) {
    // Check if carousel is moving, if not, allow interaction
    if(!moving) {
      // temporarily disable interactivity
      disableInteraction();
      // Update the "old" adjacent slides with "new" ones
        let newPrevious = slide - 1;
        let newNext = slide + 1;
        let oldPrevious = slide - 2;
        let oldNext = slide + 2;
      // Test if carousel has more than three items
      if ((totalItems - 1) > 2) {
        // Checks and updates if the new slides are out of bounds
            if (newPrevious <= 0) {
            oldPrevious = (totalItems - 1);
            } else if (newNext >= (totalItems - 1)){
            oldNext = 0;
            }
        // Checks and updates if slide is at the beginning/end
            if (slide === 0) {
            newPrevious = (totalItems - 1);
            oldPrevious = (totalItems - 2);
            oldNext = (slide + 1);
            } else if (slide === (totalItems -1)) {
            newPrevious = (slide - 1);
            newNext = 0;
            oldNext = 1;
            }
            // Now we've worked out where we are and where we're going, 
            // by adding/removing classes we'll trigger the transitions.
            // Reset old next/prev elements to default classes
            items[oldPrevious].className = itemClassName;
            console.log(items[oldPrevious])
            items[oldNext].className = itemClassName;
            
            // Add new classes
            items[newPrevious].className = itemClassName + " " + "prev";
            items[slide].className = itemClassName + " " + "active";
            items[newNext].className = itemClassName + " " + " next";
        }
    }
  }



  function moveNext(){

    if(!moving){
        if (slide === (totalItems-1)){
            slide = 0;
        }else {
            slide++;
            }

moveCarouselTo(slide);
        }
}




// Click events are nothing without a function,
//so we’ll write two functions to handle each direction.
function movePrev() {
    // Check if moving
    if (!moving) {
      // If it's the first slide, set as the last slide,
      //else -1
      if (slide === 0) {
        slide = (totalItems - 1);
      } else {
        slide--;
      }
            
      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }








  function initCarousel() {
    setInitialClasses();
    setClicks();
    // Set moving to false so that the carousel becomes interactive
    moving = false;
  }

  initCarousel();

// Once we know the direction a user is trying to navigate,
//let’s write another function to move the carousel in that direction.



// To avoid people over-clicking the buttons,
//we’ll disable interactivity while the carousel is animating,
//and enable it again once it’s finished.



// Finally, we want to handle all of this
//in a function that moves items in our carousel by
//figuring out which items to update, and updates them with
//new classes to trigger the CSS3 transitions. 




}