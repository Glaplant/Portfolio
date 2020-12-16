//Model - Manages the data of an application

import {carousel} from './zeldaCarousel.js'
import {getData } from './zeldaUtillities.js';
import ZeldaController from './zeldaController.js';
//import {} from'./lib/zeldaUtillities.js'


// Legend of Zelda id # 5f6ce9d805615a85623ec2b7
//83 pages of characters
//41 pages of monsters
//17 pages of dungeons
//13 pages of bosses
//93 pages of items
//74 pages of places



export default class ZeldaModel {


constructor(type,name,id,description,appearance){
this.name=name;
this.id=id;
this.description=description;
this.appearance = appearance;
this.type=type;
}



//filter according to game
//  async sideNav(url) {
   
//     try{
//         const dataList = await getData(url);
//         console.log(dataList.count);
//         const data = dataList.data;
//         console.log( dataList.data.length);
//     // console.log(characters.data[1].appearances);
//         data.forEach(selection => {
//              const appearance = selection.appearances;
//              appearance.forEach( game =>{
//                 if( game == "https://zelda-api.apius.cc/api/games/5f6ce9d805615a85623ec2b7"){
//                 console.log(selection.name,selection.description);
//                 };
//             });
//         });
//     }
//     catch(err){
//         console.log(err);
//     }
//  }


 async sideNav(url,page){
   
    try{
   // const url = "characters?";
    const dataType = await getData(url,page);
    const data = dataType.data;
 
    const dataArray = data.map( selection =>{
        
        const name = selection.name;
        const id = selection._id;
        const description= selection.description;
        const appearance = selection.appearances;
        const type = url;
        const newData = new ZeldaModel(type,name,id,description,appearance);
      //  console.log(newData);
       return newData;
    

    })

    //console.log(dataArray);
   return dataArray;


    }
    catch(err){
    console.log(err);
    }
};

// async getDungeons(){
   
//     try{
//     const url = "dungeons?";
//     const dungeons = await getData(url);
//     return dungeons;

// }
// catch(err){
//     console.log(err);
// }
// };
async getGames(){
   
    try{
    const url = "games?";
    const games = await getData(url);
    console.log(games);
    return games;

}
catch(err){
    console.log(err);
}
};

// async getItems(){
   
//     try{
//     const url = "items?";
//     const items = await getData(url);
//     return items;

// }
// catch(err){
//     console.log(err);
// }
// };

// async getPlaces(){
   
//     try{
//     const url = "places?";
//     const places = await getData(url);
//     return places;

// }
// catch(err){
//     console.log(err);
// }
// };

// async getBosses(){
   
//     try{
//     const url = "bosses?";
//     const bosses = await getData(url);
//     return bosses;

// }
// catch(err){
//     console.log(err);
// }
// };

// async getMonsters(){
   
//     try{
//     const url = "monsters?";
//     const monsters = await getData(url);
//     return monsters;

// }
// catch(err){
//     console.log(err);
// }
// };


}
