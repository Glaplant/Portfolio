

//View - A visual representation of the model




export default class ZeldaView {

 renderGamesMenu(games,element){
    // const games = await getGames();
    const data = games.data;
    console.log(element);
    data.forEach( game => {

        if(game.publisher == "Nintendo"){
        // const ul = document.getElementById("zelda_mainNav");
        const option = document.createElement("option");
       
        option.classList.add("menuItems");
        option.textContent= game.name;
        element.appendChild(option);
        }
    })

}



renderDescription(description){
    const h1 = document.getElementById("description");
    h1.textContent= description;
}


renderGrid(dataArray,selection){
    const parent = document.querySelector(".gridContainer");
    parent.innerHTML="";
    const h2 = document.querySelector("h2.infoHeader");
    const category = selection.toUpperCase();
    h2.innerHTML=`${category}`;
dataArray.forEach(
data => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const h2 = document.createElement("h2");
    h2.textContent=data.name;
    p.textContent=data.description;
    div.appendChild(h2);
    div.appendChild(p);
    parent.appendChild(div);
});
}



renderPages(selection){

const pages = {
characters:83,
monsters:41,
dungeons:17,
bosses:13,
items:93,
places:74
}

const div = document.querySelector(".pages");
div.innerHTML="";
const amount = pages[selection];
const ul = document.createElement("ul");


for(let i = 0; i<=amount;i++){
const li = document.createElement("li");
li.textContent= i;
li.classList.add("pageNum");
li.setAttribute("id",i)
ul.appendChild(li);
div.appendChild(ul);
}

}

}

