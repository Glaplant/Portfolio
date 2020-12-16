//import {getGames} from'./zelda.js';
import{hide,getData} from'./zeldaUtillities.js';
import {carousel  } from'./zeldaCarousel.js';
import zeldaModel from'./zeldaModel.js';
import zeldaView from'./zeldaView.js';
import ZeldaView from './zeldaView.js';
import ZeldaModel from './zeldaModel.js';





//The controller connects the model and the view.
// It takes user input, such as clicking or typing, 
//and handles callbacks for user interactions.


export default class ZeldaController {


    constructor(){

this.zeldaModel = new zeldaModel();
this.zeldaView = new zeldaView();
    }



async init(){

    
        const games = await this.zeldaModel.getGames();
        //console.log(games);
        const zeldaMain = document.querySelector("select#gameList");
       // console.log(zeldaMain)
        this.zeldaView.renderGamesMenu(games,zeldaMain);
        carousel();
        //console.log(hide);
        const element = document.getElementById("start");
        element.addEventListener("click",hide);
       // console.log("success");
        
        // document.querySelector(".fa-caret.left");
        // prev.addEventListener("click",previous);
        const buttons = Array.from(document.getElementsByClassName("navButton"));
        console.log(buttons);
        buttons.forEach(button => button.addEventListener("click",(event) =>this.buildGrid(event)));

        const gameNames = await this.dropDown();
        const pages = await this.numbers(ZeldaView);

      
       //this.counter();
}


async dropDown(){

    const dropDown = document.querySelector("select#gameList");
    //console.log(dropDown.value);
    const games = await this.zeldaModel.getGames();
    const data = games.data;
    dropDown.addEventListener("change",(event)=>{
    data.forEach( game => {
    if(game.name == event.target.value){
    this.zeldaView.renderDescription(game.description);
    //this.filterGrid(game._id);
    }
})
})



}


// async buildGrid(){
    
//     const buttons = Array.from(document.getElementsByClassName("navButton"));
//     console.log(buttons);
//     buttons.forEach(button => button.addEventListener("click",async (event)=> {
//         const selection = event.target.id;
//         //console.log(`${selection}?`);
        
//         const dataArray = await this.zeldaModel.sideNav(`${selection}?`);
//         this.zeldaView.renderPages(selection);
//         this.zeldaView.renderGrid(dataArray,selection);
        
// }));



// }

async buildGrid(event,page="page=0"){
    
    // const buttons = Array.from(document.getElementsByClassName("navButton"));
    // console.log(buttons);
    // buttons.forEach(button => button.addEventListener("click",async (event)=> {
        const selection = event.target.id;
        console.log(selection);
        console.log(page);
        
        const dataArray = await this.zeldaModel.sideNav(`${selection}?`,page);
        this.zeldaView.renderPages(selection);
        this.zeldaView.renderGrid(dataArray,selection);
        
}


async numbers(ZeldaView){
    
    const parent = document.querySelector("div.pages");
    console.log(parent);
    const observer = new MutationObserver(this.mutated);
    observer.observe(parent,{childList:true,subtree:true});
    console.log(observer);


///parent.addEventListener("click",async ()=> {await gridUpdate()});

}

async mutated(){

const pages = Array.from(document.getElementsByClassName("pageNum"));
console.log(pages);
try{
    pages.forEach( page => page.onclick= async function (event) {
        const number = event.target.innerHTML;
        console.log(number);
        const selection = document.querySelector("h2#info").innerHTML;
        console.log(selection);
        const lower = selection.toLowerCase() + "?";
        const page = "page=" + number;
        // this.updateGrid(lower,page)};
        console.log(lower, page);
        console.log(ZeldaView);
        this.zeldaModel = new ZeldaModel();
        this.zeldaView = new ZeldaView();
       // const dataArray = await getData(lower,page);
        const dataArray = await this.zeldaModel.sideNav(lower,page);
        this.zeldaView.renderGrid(dataArray,selection);
        console.log(dataArray);
        console.log(this.zeldaView);
    })
    //console.log(page)); 
}
catch(err){
    console.log(err);
}
    //    page.onclick= function 
    }


async newPage(event){
        const number = event.target.innerHTML;
        console.log(number);
        const selection = document.querySelector("h2#info").innerHTML;
        console.log(selection);
        const lower = selection.toLowerCase() + "?";
        const page = "page=" + number;
        // this.updateGrid(lower,page)};
        console.log(lower,page);
        console.log(ZeldaView);

       };
       // {
        

    //    }});
// });
//});
//}

// newPage(event){
//     const number = event.target.innerHTML;
//     console.log(number);
//     const selection = document.querySelector("h2#info").innerHTML;
//     console.log(selection);
//     const lower = selection.toLowerCase() + "?";
//     const page = "page=" + number;
//     // this.updateGrid(lower,page)};
//     console.log(lower,page);

// }



// async updateGrid(lower,page){
// const dataArray = await getData(lower, page);
// //   const dataArray = await this.zeldaModel.sideNav(lower, page);
// //   console.log(dataArray);
// }



}