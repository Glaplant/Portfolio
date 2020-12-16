

export async function getData(url,page="page=0"){
    const baseUrl = "https://zelda-api.apius.cc/api/";
    const proxy = "https://cors-anywhere.herokuapp.com/";
    //const proxy = "http://127.0.0.1:8080/";
    const limit = "limit=20";
   // const name = "?=The Legend of Zelda";
    const newUrl =  proxy + baseUrl + url + limit + "&" + page ;
    try{
    const response = await fetch(newUrl);
    const data = await response.json();
    console.log(data);
    
    return data;
    }
    catch(err){
        console.log(err);
    }
}













export function hide(){
    const element = document.querySelector("div.zelda_sideNav");;
    console.log(element);
    const menu = element;
    console.log(menu);
    menu.classList.toggle("hideZelda");
       


   
}