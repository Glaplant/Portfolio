// laplant.g@gmail.com

// $2a$10$XPr0ZSeNMXTM3piVDGzsZuEiEc1xvzjse1VfNhgkNAZK4OMAwEoMG




async function harryPotter(data){
    const token="?key=$2a$10$jT8D/mw9h/stkDHeAHXXDe1TzH8wtNjRv2pjOWhRedwu5SlxMJTeG";
    const url ="https://www.potterapi.com/v1/";
   // const url ="https://hp-api.herokuapp.com/api/";
    const fetchUrl= url + data + token;
   // const fetchUrl=`${url + data}`;
    console.log(fetchUrl);
    try{
    const response = await fetch(fetchUrl);
     console.log(response);
    const magic = await response.json();
    console.log(magic);

    }catch(err){
       console.error(Error);
    }
    //return magic;
}


function controller(){
    const data = "characters";
    harryPotter(data);
}

function errorHandler(err){
    console.log(err);
    
}

controller();