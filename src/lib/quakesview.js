  // Quake View handler
  export default class QuakesView {

    renderQuakeList(quakeList, listElement) {
    console.log(quakeList.features);
    console.log(listElement);
    const ul = listElement;
    ul.innerHTML="";
      //build a list of the quakes...
      quakeList.features.forEach( quake => {
      console.log(quake);
      const li = document.createElement("li");
      li.setAttribute("data-id",quake.id);
      const time = quake.properties.time;
      const date = new Date(time);

      li.innerText= quake.properties.title + " , " + date.toString();
      ul.appendChild(li);
      // //include the title and time of each quake
      // // then append the list to listElement. 

      // //You should also add the id of the quake record as a 
      // //data- property to the li. ie. <li data-id="">
    
      });
    }
  }
     
  //     listElement.innerHTML = quakeList.features
  //     .map(quake => {
  //       return `
  // ${quake.properties.title}, ${new Date(
  //         quake.properties.time
  //       )}
  // `;
  //     })
  //     .join('');
  //   }


  //   renderQuake(quake, element) {
  //     const quakeProperties = Object.entries(quake.properties);
  //     // for the provided quake make a list of 
  //     //each of the properties associated with it. 

  //     //Then append the list to the provided element.

  //     // Notice the first line of this method. 
  //     //Object.entries() is a slick way to turn an object 
  //     //into an array so that we can iterate over it easier! 
  //   }
  // }