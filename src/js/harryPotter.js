// laplant.g@gmail.com

// $2a$10$XPr0ZSeNMXTM3piVDGzsZuEiEc1xvzjse1VfNhgkNAZK4OMAwEoMG




async function harryPotter(data,url="https://cors-anywhere.herokuapp.com/https://www.potterapi.com/v1/"){
  const token = "$2a$10$XPr0ZSeNMXTM3piVDGzsZuEiEc1xvzjse1VfNhgkNAZK4OMAwEoMG";
   //const url ="http://hp-api.herokuapp.com/api/";
   // const url = 
   //const fetchUrl =url+data;
  // const header = Headers.append(Access-Control-Allow-Origin:*);
   const fetchUrl = `${url + data}?key=${token}`;
    console.log(fetchUrl);
    const response = await fetch(fetchUrl);
    console.log(response);
    const magic = await response.json();

    console.log(magic);
    //return magic;
}


function controller(){
    const data = "spells";
    harryPotter(data);
}

function errorHandler(err){
    console.log(err);
    
}

controller();