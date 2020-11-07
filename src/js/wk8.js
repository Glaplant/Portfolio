



async function fetchUrl(url = "https://swapi.dev/api/people/"){


const data = await fetchPeople(url);


if(data.next)
{
    const nextButton = document.getElementById("next");
    next.onclick = () =>{
        fetchUrl(data.next);

    };

}
if(data.previous){
    const previousButton = document.getElementById("previuos");
    previous.onclick = () =>{
        fetchUrl(data.previous);
    };

}

writeDom(data.results);

}



(function(){
const ul = document.getElementById("pages");
console.log(ul);
ul.addEventListener('click',url);
}());

(function(){
    const first = document.getElementById("first");
    const last = document.getElementById("last");
    first.onclick = () =>{ const url = "https://swapi.dev/api/people/?page=1";
    fetchUrl(url);};
    last.onclick = () =>{ const url = "https://swapi.dev/api/people/?page=9";
    fetchUrl(url);};
    }());

    function first(){
        const url = "https://swapi.dev/api/people/?page=1";
        fetchUrl(url);
        }

        function last(){
            const url = "https://swapi.dev/api/people/?page=9";
            fetchUrl(url);
            }



function url(event){
const page = event.target.innerHTML;
const url = "https://swapi.dev/api/people/?page=";
console.log(page);
const current = url + page;
fetchUrl(current);
}





async function fetchPeople(url){

    const response = await fetch(url);
    const person = await response.json();
    console.log(person);
    return person;
   
   
 

   
}




function writeDom(people){
  
    const container = document.getElementById("swAPI");
  
    let number = 0;
    let empty = document.getElementsByClassName("child");
    
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
   

    people.forEach( person =>{
        
        // if(empty.length == 0){
            const div = document.createElement("div");
            const p = document.createElement("p");
            div.classList.add("child");
            p.classList.add("people");
            p.textContent = person.name;
            div.appendChild(p);
            container.appendChild(div);
     

   
    });
      
 

};




fetchUrl();

