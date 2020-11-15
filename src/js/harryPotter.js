// laplant.g@gmail.com

// $2a$10$XPr0ZSeNMXTM3piVDGzsZuEiEc1xvzjse1VfNhgkNAZK4OMAwEoMG




async function harryPotter(data){
    const key = "?key=$2a$10$XPr0ZSeNMXTM3piVDGzsZuEiEc1xvzjse1VfNhgkNAZK4OMAwEoMG";
    const url ="https://www.potterapi.com/v1/"
    const route = data;
    const fetchUrl = url + route + key;
    const response = await fetch( fetchUrl );
    const magic = await response.json();
    console.log(magic);
    return magic;
}


function controller(){
    const data = "spells";
    harryPotter(data);
}


controller();