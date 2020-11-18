

document.addEventListener('DOMContentLoaded',init);

function init(){
 //const keys = document.getElementsByTagName("audio");
   // keys.addEventListener("keydown",play);
    document.addEventListener("keydown",play);
   
};


function play(event){

    //const target = event.target;
    let char = event.char || event.charCode || event.which;
    const audio = Array.from(document.getElementsByTagName("audio"));
    const buttons = Array.from(document.getElementsByClassName("key"));
    let index = 0;


    buttons.forEach(button => {
      if(button.dataset.key == char){
        button.classList.add("playing");
        index = buttons.indexOf(button);
        let number = index+1;
        let position = "translateY(" + 10 + "px )";
        let child = document.querySelector(`.key:nth-child(${number})`).style.transform = position;
        let transform = document.querySelector(`.key:nth-child(${number})`).style.transform;
        console.log(transform);
        }

        
        // console.log(child);  
          }
      
    )



    audio.forEach( sound => {
        if(sound.dataset.key == char) 
        {
            sound.currentTime = 0;
            sound.play();
            sound.onended = () => {
              buttons.forEach(button => {
                if(button.dataset.key == char){
                  button.classList.remove("playing");
                }
              })
            }

         }
       }
      );
    }
